import React, { useState } from 'react';
import "../stylesheet/CarManagement.css"
import FilterComponent from "../Components/FilterComponent"; // Ensure the path is correct

const AdminBrowserPage = () => {
    const initialCarDetails = [
        {
            id: 1,
            name: "Mini cooper",
            type: "SUV",
            mileage: 20,
            image: "data:image/jpeg;base64,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",
            Rent: 5000,
            Seater: 4,
            Fuel: "Petrol",
            Availability: true,
        },
        {
            id: 2,
            name: "Thar",
            type: "SUV",
            mileage: 15,
            image: "data:image/jpeg;base64,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",
            Rent: 10000,
            Seater: 4,
            Fuel: "Petrol",
            Availability: true,
        },
        {
            id: 3,
            name: "Lamborghini",
            type: "SUV",
            mileage: 20,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXu-mTPC2DgVn724w2t7j3AO9fATcQZZn-1A&s",
            Rent: 20000,
            Seater: 4,
            Fuel: "Petrol",
            Availability: true,
        },
        {
            id: 4,
            name: "Bugatti",
            type: "SUV",
            mileage: 20,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XqrPIIHEnJj7EBrksMhT2qOsz6sLwnLc9w&s",
            Rent: 40000,
            Seater: 4,
            Fuel: "Petrol",
            Availability: true,
        },
        {
            id: 5,
            name: "Tata",
            type: "SUV",
            mileage: 20,
            image: "data:image/jpeg;base64,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",
            Rent: 3500,
            Seater: 4,
            Fuel: "Petrol",
            Availability: true,
        }
    ];

    const [carDetails, setCarDetails] = useState(initialCarDetails);
    const [filteredCars, setFilteredCars] = useState(initialCarDetails);
    const [editingCarId, setEditingCarId] = useState(null);
    const [editCarDetails, setEditCarDetails] = useState(null);
    const [newCarDetails, setNewCarDetails] = useState({
        id: '',
        name: '',
        type: '',
        mileage: '',
        Fuel: '',
        Rent: '',
        Seater: '',
        image: ''
    });

    const handleFilterChange = (filters) => {
        const { searchTerm, filters: { type, fuel }, selectedRanges } = filters;

        const filtered = carDetails.filter(car => {
            const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = type.length === 0 || type.includes(car.type);
            const matchesFuel = fuel.length === 0 || fuel.includes(car.Fuel);
            const matchesRange = selectedRanges.length === 0 || selectedRanges.some(range => car.Rent >= range.min && car.Rent <= range.max);

            return matchesSearch && matchesType && matchesFuel && matchesRange;
        });

        setFilteredCars(filtered);
    };

    const handleEditClick = (car) => {
        setEditingCarId(car.id);
        setEditCarDetails({ ...car });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditCarDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveEdit = () => {
        setCarDetails((prevState) => prevState.map(car =>
            car.id === editingCarId ? editCarDetails : car
        ));
        setFilteredCars((prevState) => prevState.map(car =>
            car.id === editingCarId ? editCarDetails : car
        ));
        setEditingCarId(null);
        setEditCarDetails(null);
    };

    const handleDeleteClick = (carId) => {
        setCarDetails((prevState) => prevState.filter(car => car.id !== carId));
        setFilteredCars((prevState) => prevState.filter(car => car.id !== carId));
    };

    const handleNewCarChange = (e) => {
        const { name, value } = e.target;
        setNewCarDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddNewCar = () => {
        const newCar = {
            ...newCarDetails,
            id: new Date().getTime().toString() // Generate a unique ID
        };
        setCarDetails((prevState) => [...prevState, newCar]);
        setFilteredCars((prevState) => [...prevState, newCar]);
        setNewCarDetails({
            id: '',
            name: '',
            type: '',
            mileage: '',
            Fuel: '',
            Rent: '',
            Seater: '',
            image: ''
        });
    };

    return (
        <>
            <FilterComponent onFilterChange={handleFilterChange} />
            <div className="add-car-form">
                <h2>Add New Car</h2>
                <input type="text" name="name" placeholder="Name" value={newCarDetails.name} onChange={handleNewCarChange} />
                <input type="text" name="type" placeholder="Type" value={newCarDetails.type} onChange={handleNewCarChange} />
                <input type="number" name="mileage" placeholder="Mileage" value={newCarDetails.mileage} onChange={handleNewCarChange} />
                <input type="text" name="Fuel" placeholder="Fuel" value={newCarDetails.Fuel} onChange={handleNewCarChange} />
                <input type="number" name="Rent" placeholder="Rent" value={newCarDetails.Rent} onChange={handleNewCarChange} />
                <input type="number" name="Seater" placeholder="Seater" value={newCarDetails.Seater} onChange={handleNewCarChange} />
                <input type="text" name="image" placeholder="Image URL" value={newCarDetails.image} onChange={handleNewCarChange} />
                <button className="card-button" onClick={handleAddNewCar}>Add Car</button>
            </div>
            <div className='Car-container'>
                {filteredCars.map(car => (
                    <div className="card" key={car.id}>
                        <div className="card-details">
                            <img src={car.image} alt="car" />
                            <div className='details'>
                                <p className="text-title">
                                    {editingCarId === car.id ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={editCarDetails.name}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        car.name
                                    )}
                                </p>
                                <p className="text-body">
                                    Type: {editingCarId === car.id ? (
                                        <input
                                            type="text"
                                            name="type"
                                            value={editCarDetails.type}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        car.type
                                    )}
                                </p>
                                <p className="text-body">
                                    Mileage: {editingCarId === car.id ? (
                                        <input
                                            type="number"
                                            name="mileage"
                                            value={editCarDetails.mileage}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        `${car.mileage} km/l`
                                    )}
                                </p>
                                <p className="text-body">
                                    Fuel: {editingCarId === car.id ? (
                                        <input
                                            type="text"
                                            name="Fuel"
                                            value={editCarDetails.Fuel}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        car.Fuel
                                    )}
                                </p>
                                <p className="text-body">
                                    Rent: ₹{editingCarId === car.id ? (
                                        <input
                                            type="number"
                                            name="Rent"
                                            value={editCarDetails.Rent}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        car.Rent
                                    )}
                                </p>
                                <p className="text-body">
                                    Seater: {editingCarId === car.id ? (
                                        <input
                                            type="number"
                                            name="Seater"
                                            value={editCarDetails.Seater}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        car.Seater
                                    )}
                                </p>
                                {editingCarId === car.id ? (
                                    <div className="button-container">
                                        <button className='card-button' onClick={handleSaveEdit}>
                                            Save
                                        </button>
                                        <button className='card-button' onClick={() => setEditingCarId(null)}>
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="button-container">
                                        <button className='card-button card-button-edit' onClick={() => handleEditClick(car)}>
                                            Edit
                                        </button>
                                        <button className='card-button card-button-delete' onClick={() => handleDeleteClick(car.id)}>
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminBrowserPage;
