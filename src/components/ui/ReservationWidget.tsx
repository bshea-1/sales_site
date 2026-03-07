'use client';

import React, { useState } from 'react';

export default function ReservationWidget() {
    const generateTimeSlots = () => {
        const slots = [];
        let startHour = 11;
        let startMin = 0;

        // Generate slots from 11:00 AM to 6:30 PM
        while (startHour < 19 || (startHour === 19 && startMin === 0)) {
            const ampm = startHour >= 12 ? 'PM' : 'AM';
            const displayHour = startHour > 12 ? startHour - 12 : startHour;
            const displayMin = startMin === 0 ? '00' : '30';
            slots.push(`${displayHour}:${displayMin} ${ampm}`);

            startMin += 30;
            if (startMin >= 60) {
                startHour++;
                startMin = 0;
            }
        }
        return slots;
    };

    const slots = generateTimeSlots();

    return (
        <div className="glass-card widget-container" style={{ width: '100%', padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700, textAlign: 'center', color: '#fff', lineHeight: 1.4, fontFamily: 'var(--ff-heading)' }}>
                Please Reserve a time slot or just show up! <br />
                <span style={{ color: 'var(--color-primary)' }}>See you there!</span>
            </h3>

            <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="hidden" name="access_key" value="96b45f96-a042-40df-a7da-40a0cde3faa5" />
                <input type="hidden" name="name" value="Job Fair Attendee" />

                <select
                    name="message"
                    required
                    style={{
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(0,0,0,0.5)',
                        color: '#fff',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                        appearance: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <option value="" disabled selected>Select a time slot</option>
                    {slots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                    ))}
                </select>

                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    style={{
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(0,0,0,0.5)',
                        color: '#fff',
                        fontFamily: 'inherit',
                        fontSize: '1rem'
                    }}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                        padding: '0.8rem',
                        fontSize: '1rem',
                        marginTop: '0.5rem',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    Reserve Time Slot
                </button>
            </form>
        </div>
    );
}
