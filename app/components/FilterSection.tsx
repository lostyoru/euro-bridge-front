'use client';
import { useState, useEffect } from 'react';
import filterData from '@/data/filter.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FilterOptions, SelectedFilters } from '@/types/filter';

interface FilterSectionProps {
  onFilterChange: (filters: SelectedFilters) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const filterOptions: FilterOptions = filterData;

  const handleCheckboxChange = (category: string, subcategory: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[category]) {
        if (newFilters[category].includes(subcategory)) {
          newFilters[category] = newFilters[category].filter((item) => item !== subcategory);
        } else {
          newFilters[category].push(subcategory);
        }
      } else {
        newFilters[category] = [subcategory];
      }
      return newFilters;
    });
  };

  const toggleCategoryExpansion = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories((prevExpanded) =>
        prevExpanded.filter((expanded) => expanded !== category)
      );
    } else {
      setExpandedCategories((prevExpanded) => [...prevExpanded, category]);
    }
  };

  useEffect(() => {
    console.log('Selected filters:', selectedFilters);
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  return (
    <div className="bg-white p-4 rounded-lg text-gray-700 w-2/12">
      {Object.entries(filterOptions).map(([categoryName, categoryOptions]) => (
        <div key={categoryName} className="mb-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleCategoryExpansion(categoryName)}
          >
            <span
              className="font-semibold"
              style={{ color: '#515B6F', textTransform: 'capitalize' }}
            >
              {categoryName.replace(/_/g, ' ')}
            </span>
            <FontAwesomeIcon
              icon={expandedCategories.includes(categoryName) ? faAngleUp : faAngleDown}
              className="ml-auto"
            />
          </div>
          {expandedCategories.includes(categoryName) && (
            <ul className="ml-4 my-2">
              {categoryOptions.map((option) => (
                <li key={option} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={() => handleCheckboxChange(categoryName, option)}
                      checked={selectedFilters[categoryName]?.includes(option) || false}
                    />
                    <span style={{ color: '#515B6F', textTransform: 'capitalize' }}>
                      {option}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
