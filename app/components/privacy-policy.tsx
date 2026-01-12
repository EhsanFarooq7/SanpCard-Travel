"use client";
import { X } from "lucide-react";

interface PrivacyModalProps {
    onClose: () => void;
}

const PrivacyModal = ({ onClose }: PrivacyModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Privacy Policy</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="prose max-w-none space-y-4 text-gray-700">
                        <p>SNAPCARD LTD ("we", "us", "our") is committed to protecting your personal data and respecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

                        <p>This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website or use our travel services.</p>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">1. Who We Are</h3>
                        <p>SNAPCARD LTD is a company registered in England and Wales (Company Number: 16873898) with its registered office at 67 Beatrix, Victoria Wharf, Watkiss Way, Cardiff CF11 0SE.</p>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">2. Personal Data We Collect</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Telephone number</li>
                            <li>Travel enquiry and booking details</li>
                            <li>IP address and website usage data</li>
                        </ul>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">3. How We Use Your Data</h3>
                        <p>We process your personal data for the following lawful purposes:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>To respond to travel enquiries and booking requests</li>
                            <li>To provide travel-related services</li>
                            <li>To communicate with you regarding your enquiry</li>
                            <li>To comply with legal and regulatory obligations</li>
                            <li>For legitimate business interests</li>
                        </ul>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">4. Lawful Basis for Processing</h3>
                        <p>We process personal data under one or more of the following lawful bases:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Your consent</li>
                            <li>Performance of a contract</li>
                            <li>Legal obligations</li>
                            <li>Legitimate interests</li>
                        </ul>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">5. Data Sharing</h3>
                        <p>We do not sell your personal data. We may share your data with trusted third parties such as airlines, hotels, and travel suppliers only where necessary to provide services.</p>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">6. Data Retention</h3>
                        <p>We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy or to comply with legal requirements.</p>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">7. Your Rights</h3>
                        <p>Under UK GDPR, you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Access your personal data</li>
                            <li>Request correction or deletion</li>
                            <li>Object to processing</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h3 className="font-bold text-xl text-gray-800 mt-6 mb-3">8. Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy or your data, contact us at:</p>
                        <p className="font-semibold">Email: admin@snapcardtravel.co.uk</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PrivacyModal;