'use client';

import React, { useState } from 'react';

export default function ReservationWidget() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate a network request
        setTimeout(() => setStatus('success'), 1000);
    };

    if (status === 'success') {
        return (
            <div className="glass-card" style={{ maxWidth: '400px', width: '100%', padding: '2rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontSize: '1.5rem', fontFamily: 'var(--ff-heading)' }}>Reservation Confirmed!</h3>
                <p style={{ color: 'var(--color-white)', lineHeight: 1.6 }}>We look forward to seeing you at the job fair. We have saved your spot!</p>
            </div>
        );
    }

    return (
        <div className="glass-card" style={{ maxWidth: '450px', width: '100%', padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700, textAlign: 'center', color: '#fff', lineHeight: 1.4, fontFamily: 'var(--ff-heading)' }}>
                Please Reserve a time slot or just show up! <br />
                <span style={{ color: 'var(--color-primary)' }}>See you there!</span>
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <select
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
                    disabled={status === 'submitting'}
                    style={{
                        padding: '0.8rem',
                        fontSize: '1rem',
                        marginTop: '0.5rem',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    {status === 'submitting' ? 'Reserving...' : 'Reserve Time Slot'}
                </button>
            </form>
        </div>
    );
}
