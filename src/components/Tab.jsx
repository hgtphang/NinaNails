export default function NavBar ({setSelectedTab}) {
    return (
        <div className="tab">
            <div onClick={() => setSelectedTab('Manicure')}>Manicure</div>
            <div onClick={() => setSelectedTab('Pedicure')}>Pedicure</div>
            <div onClick={() => setSelectedTab('Dip Powder')}>Dip Powder</div>
            <div onClick={() => setSelectedTab('Artificid Nails')}>Artificid Nails</div>
        </div>
    )
}