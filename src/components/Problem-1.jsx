import React, { useState } from 'react';

const Problem1 = () => {
    const [allData, setAllData] = useState([])
    const [show, setShow] = useState('all');
    const [filterData, setFilterData] = useState([])

    const handleClick = (val) => {
        setShow(val);

        // Filter and sort the data based on the selected option
        let filteredAndSortedData = [...allData];

        switch (val) {
            case 'active':
                filteredAndSortedData = allData.filter(data => data.status === 'active');
                break;
            case 'completed':
                filteredAndSortedData = allData.filter(data => data.status === 'completed');
                break;
            case 'all':
                // No need to filter when 'all' is selected
                break;
            default:
                // Filter by status other than 'active' and 'completed'
                filteredAndSortedData = allData.filter(data => data.status !== 'active' && data.status !== 'completed');
                break;
        }

        // Sort the filtered data
        filteredAndSortedData.sort((a, b) => {
            const statusOrder = {
                active: 1,
                completed: 2,
                pending: 3,
                archive: 4
            };
            return statusOrder[a.status] - statusOrder[b.status];
        });

        setFilterData(filteredAndSortedData);
    };

    // form submit------
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form?.name.value
        const status = form?.status.value.toLowerCase()
        const data = {
            name,
            status
        }

        setAllData([...allData, data])
        setFilterData([...allData, data])
        form?.reset()
    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={(e) => handleSubmit(e)} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterData?.map((data, i) =>
                                    <tr key={i}>
                                        <td>{data?.name}</td>
                                        <td>{data?.status}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;