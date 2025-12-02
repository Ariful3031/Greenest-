import React, { useState } from 'react';

const DuplicateOther = () => {
    const [form, setForm] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // কোনো toast বা backend কল নেই, শুধু UI
        setForm({ name: "", email: "" }); // ফর্ম ক্লিয়ার
    };
    return (
        <div>
            <div className="max-w-md mx-auto bg-green-50 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
                    Book Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                        />
                    </div>

                    {/* Book Now Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
                    >
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DuplicateOther;