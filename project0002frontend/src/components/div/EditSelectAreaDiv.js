import React, { useState } from 'react';

export const EditSelectAreaDiv = ({ mode, onChange, value, valueList, id, title, hasPermission }) => {
    const [editMode, setEditMode] = useState(mode);
    const handleToggle = () => {
        setEditMode(!editMode);
    };
    return (
        <div>
            {title}
            <br />
            {editMode ?
                <div>
                    <select defaultValue={value}
                        id={id}
                        autoFocus
                        onChange={onChange}
                        onBlur={handleToggle}>
                        {valueList.map(exp => <option key={exp.code} value={exp.name}>{exp.name}</option>
                        )}
                    </select>
                </div>
                : <div>
                    {value}
                </div>}
            <button
                disabled={!hasPermission}
                id={id}
                onMouseDown={e => e.preventDefault()}
                onClick={handleToggle}>
                {editMode ? "Save" : "Edit"}
            </button>
        </div>
    );
};
