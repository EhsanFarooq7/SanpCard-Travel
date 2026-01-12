// // import { NextResponse } from 'next/server';
// // import nodemailer from 'nodemailer';

// // export async function POST(req: Request) {
// //     try {
// //         const body = await req.json();
// //         const { flight, passengers, userDetails } = body;

// //         // 1. Setup Transporter (Using Namecheap Private Email settings)
// //         const transporter = nodemailer.createTransport({
// //             host: "mail.privateemail.com", // Namecheap's mail server
// //             port: 465,
// //             secure: true, // Use SSL
// //             auth: {
// //                 user: process.env.EMAIL_USER,
// //                 pass: process.env.EMAIL_PASS, // Use an Environment Variable in production
// //             },
// //         });

// //         // 2. Define Email Content
// //         const mailOptions = {
// //             from: "admin@snapcardtravel.co.uk",
// //             to: "admin@snapcardtravel.co.uk",
// //             subject: `New Flight Booking Request: ${flight.airline}`,
// //             html: `
// //         <h2>New Booking Received</h2>
// //         <p><strong>Passenger Name:</strong> ${userDetails.name}</p>
// //         <p><strong>Email:</strong> ${userDetails.email}</p>
// //         <p><strong>Passengers:</strong> ${passengers}</p>
// //         <hr />
// //         <h3>Flight Details</h3>
// //         <p><strong>Airline:</strong> ${flight.airline}</p>
// //         <p><strong>Route:</strong> ${flight.from} to ${flight.to}</p>
// //         <p><strong>Time:</strong> ${flight.departTime} - ${flight.arriveTime}</p>
// //         <p><strong>Price:</strong> £${flight.price}</p>
// //       `,
// //         };

// //         await transporter.sendMail(mailOptions);
// //         return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
// //     } catch (error) {
// //         return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
// //     }
// // }
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { type, formData, flight, userDetails, passengers } = body;

//         const transporter = nodemailer.createTransport({
//             host: "mail.privateemail.com",
//             port: 465,
//             secure: true,
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         let subject = "";
//         let htmlContent = "";

//         if (type === 'QUOTE_REQUEST') {
//             subject = `New Quote Request: ${formData.destination}`;
//             htmlContent = `
//         <h2>New Travel Quote Request</h2>
//         <p><strong>Name:</strong> ${formData.name}</p>
//         <p><strong>Email:</strong> ${formData.email}</p>
//         <p><strong>Phone:</strong> ${formData.phone}</p>
//         <p><strong>Destination:</strong> ${formData.destination}</p>
//         <p><strong>Date:</strong> ${formData.date}</p>
//         <p><strong>Travelers:</strong> ${formData.passengers}</p>
//         <p><strong>Message:</strong> ${formData.message}</p>
//       `;
//         } else {
//             // Your existing flight booking email logic
//             subject = `New Flight Booking: ${flight.airline}`;
//             htmlContent = `<p>Booking details for ${userDetails.name}...</p>`;
//         }

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: "admin@snapcardtravel.co.uk",
//             subject: subject,
//             html: htmlContent,
//         });

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error("Email Error:", error);
//         return NextResponse.json({ error: "Email failed" }, { status: 500 });
//     }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { type, formData, flight, userDetails, passengers } = body;

        const transporter = nodemailer.createTransport({
            host: "mail.privateemail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        let subject = "";
        let htmlContent = "";

        // Handle Quote Requests
        if (type === 'QUOTE_REQUEST') {
            subject = `New Quote Request: ${formData.destination}`;
            htmlContent = `
        <h2>New Travel Quote Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Destination:</strong> ${formData.destination}</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Travelers:</strong> ${formData.passengers}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `;
        }
        // Handle Flight Bookings
        else {
            subject = `New Flight Booking: ${flight.airline}`;
            htmlContent = `
        <h2>New Booking Received</h2>
        <p><strong>Passenger Name:</strong> ${userDetails.name}</p>
        <p><strong>Email:</strong> ${userDetails.email}</p>
        <p><strong>Phone:</strong> ${userDetails.phone}</p> <p><strong>Total Passengers:</strong> ${passengers}</p>
        <hr />
        <h3>Flight Details</h3>
        <p><strong>Airline:</strong> ${flight.airline}</p>
        <p><strong>Route:</strong> ${flight.from} to ${flight.to}</p>
        <p><strong>Price:</strong> £${flight.price * passengers}</p>
      `;
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "admin@snapcardtravel.co.uk",
            subject: subject,
            html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
}