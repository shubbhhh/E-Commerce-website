
export function InputBox({ placeholder, title, onchange }) {
    return (
    <div>
        <div className="text-sm font-medium text-left py-2">
            {title}
        </div>
        <input type="text" placeholder={placeholder} onChange={onchange} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
    )
};