import React, { useState } from 'react';
import "../stylesheet/BrowsePage.css";


const priceRanges = [
    { label: '1000 - 5000', min: 1000, max: 5000 },
    { label: '5000 - 10000', min: 5000, max: 10000 },
    { label: '10000 - 15000', min: 10000, max: 15000 },
    { label: '15000 - 20000', min: 15000, max: 20000 },
    { label: '20000 - 50000', min: 20000, max: 50000 },
];

const FilterComponent = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({ type: [], fuel: [] });
    const [selectedRanges, setSelectedRanges] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        onFilterChange({ searchTerm: term, filters, selectedRanges });
    };

    const handleFilterChange = () => {
        const typeCheckboxes = document.querySelectorAll('input[name="type"]:checked');
        const fuelCheckboxes = document.querySelectorAll('input[name="fuel"]:checked');

        const selectedTypes = Array.from(typeCheckboxes).map(cb => cb.value);
        const selectedFuels = Array.from(fuelCheckboxes).map(cb => cb.value);

        const newFilters = { type: selectedTypes, fuel: selectedFuels };
        setFilters(newFilters);
        onFilterChange({ searchTerm, filters: newFilters, selectedRanges });
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const [min, max] = value.split('-').map(Number);

        let newSelectedRanges;
        if (checked) {
            newSelectedRanges = [...selectedRanges, { min, max }];
        } else {
            newSelectedRanges = selectedRanges.filter(range => range.min !== min || range.max !== max);
        }

        setSelectedRanges(newSelectedRanges);
        onFilterChange({ searchTerm, filters, selectedRanges: newSelectedRanges });
    };

    return (
        <div className='Sidebar'>
            <input 
                type="text" 
                className='Search-bar' 
                placeholder='Search by name' 
                value={searchTerm}
                onChange={handleSearch} 
            />

            <div className='Filter-section'>
                <div>
                    <h4>Filter by Type</h4>
                    <label>
                        <input 
                            type="checkbox" 
                            name="type" 
                            value="SUV" 
                            onChange={handleFilterChange} 
                        /> SUV
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="type" 
                            value="Sedan" 
                            onChange={handleFilterChange} 
                        /> Sedan
                    </label>
                    {/* Add more types as needed */}
                </div>

                <div>
                    <h3>Filter by Fuel</h3>
                    <label>
                        <input 
                            type="checkbox" 
                            name="fuel" 
                            value="Petrol" 
                            onChange={handleFilterChange} 
                        /> Petrol
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="fuel" 
                            value="Diesel" 
                            onChange={handleFilterChange} 
                        /> Diesel
                    </label>
                    {/* Add more fuel types as needed */}
                </div>

                <div className="checkbox-container">
                    <h4>Price Ranges:</h4>
                    {priceRanges.map((range, index) => (
                        <div key={index} className="checkbox-item">
                            <input
                                type="checkbox"
                                id={`range-${index}`}
                                value={`${range.min}-${range.max}`}
                                checked={selectedRanges.some(r => r.min === range.min && r.max === range.max)}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor={`range-${index}`} className="checkbox-label">
                                {range.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
