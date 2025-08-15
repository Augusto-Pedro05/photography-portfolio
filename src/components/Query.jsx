import { useState } from 'react';
import './Query.css';

export default function Query({ content , details}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="query">
            <div className="query-header">
                <button onClick={() => setOpen(!open)}>
                    {open ? '−' : '+'}
                </button>
                <h3>{content}</h3>
            </div>

            {open && (
                <div className="details">
                    {details}
                </div>
            )}
        </div>
    );
}
