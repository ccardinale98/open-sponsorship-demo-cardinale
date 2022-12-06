import './Profile.css'

export function Profile({ changePage, athlete }) {
    function formatDate(string) {
        var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options); 
    }

    return (
        <div className='containerDiv profileContainer'>
            <header className='header'>
                <h1 className="name">{athlete.name}</h1>
                <button className="btn btn-primary submit" onClick={() => changePage("list")}>Back to List</button> 
            </header>
            <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action">Sport | {athlete.sport}</button>
                <button type="button" className="list-group-item list-group-item-action">Gender | {athlete.gender}</button>
                <button type="button" className="list-group-item list-group-item-action">Birthday | {formatDate(athlete.birth)}</button>
                <button type="button" className="list-group-item list-group-item-action">Description | {athlete.description}</button>
                <button type="button" className="list-group-item list-group-item-action">Location | {athlete.location}</button>
                <button type="button" className="list-group-item list-group-item-action">Team | {athlete.team}</button>
            </div>
        </div>
    )
}