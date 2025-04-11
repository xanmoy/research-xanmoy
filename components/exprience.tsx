"use client";
import { motion } from "framer-motion";
import { GraduationCap, School, Building2 } from "lucide-react";

const ExprienceData = [
    {
        title: "Cloud Lead at Google Developer Groups (GDG)",
        location: "Kolkata, India",
        description:
            "I lead cloud computing initiatives, mentor students, and organize workshops to foster learning and innovation in cloud technologies.",
        year: "2024 - present",
        icon: <School size={20} />,
        side: "left",
    },
    {
        title: "Co-founder of Zeno",
        location: "Kolkata, India",
        description:
            "Zeno is a startup focused on developing innovative solutions in the field of technology and Exprience.",
        year: "2025 - present",
        icon: <Building2 size={20} />,
        side: "right",
    },

];

export default function ExprienceTimeline() {
    return (
        <section className="relative px-4 md:px-12 py-20 bg-background text-white">
            <h2 className="text-3xl font-bold mb-16 text-center">Exprience</h2>
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Vertical center line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full z-0" />

                {ExprienceData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative w-full flex md:items-center"
                    >
                        {/* Desktop view: alternating cards */}
                        <div className="hidden md:flex w-full justify-between items-center">
                            {index % 2 === 0 ? (
                                <>
                                    <div className="w-5/12 flex justify-end">
                                        <div className="bg-card text-white rounded-xl border border-zinc-800 p-4 shadow-lg text-left">
                                            <h3 className="text-lg font-semibold">{edu.title}</h3>
                                            <p className="text-sm text-gray-400">{edu.location}</p>
                                            <p className="mt-2 text-sm">{edu.description}</p>
                                            <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                                        </div>
                                    </div>
                                    <div className="w-2 flex justify-center">
                                        <div className="z-10 bg-black border-2 border-violet-500 rounded-full p-3">
                                            {edu.icon}
                                        </div>
                                    </div>
                                    <div className="w-5/12" />
                                </>
                            ) : (
                                <>
                                    <div className="w-5/12" />
                                    <div className="w-2 flex justify-center">
                                        <div className="z-10 bg-black border-2 border-violet-500 rounded-full p-3">
                                            {edu.icon}
                                        </div>
                                    </div>
                                    <div className="w-5/12 flex justify-start">
                                        <div className="bg-card text-white rounded-xl border border-zinc-800 p-4 shadow-lg text-left">
                                            <h3 className="text-lg font-semibold">{edu.title}</h3>
                                            <p className="text-sm text-gray-400">{edu.location}</p>
                                            <p className="mt-2 text-sm">{edu.description}</p>
                                            <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Mobile view: all cards centered under icons */}
                        <div className="md:hidden flex flex-col items-center mb-10">
                            <div className="z-10 bg-black border-2 border-violet-500 rounded-full p-3 mb-4">
                                {edu.icon}
                            </div>
                            <div className="bg-card text-white rounded-xl border border-zinc-800 p-4 shadow-lg w-[90%] text-center">
                                <h3 className="text-lg font-semibold">{edu.title}</h3>
                                <p className="text-sm text-gray-400">{edu.location}</p>
                                <p className="mt-2 text-sm">{edu.description}</p>
                                <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
