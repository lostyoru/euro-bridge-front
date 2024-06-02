'use client';
import { useState, useEffect } from 'react';
import filterData from '@/data/filter.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Filter } from '@/types/filter';
import { InternshipFilterSidebarProps } from '@/types/filter';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FilterOptions } from '@/types/filter';
const InternshipFilterSidebar: React.FC<InternshipFilterSidebarProps> = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const filterOptions: FilterOptions = filterData;

  // Handle checkbox change
  const handleCheckboxChange = (category: string, subcategory: string) => {
    const isChecked = selectedFilters.some(filter => filter.category === category && filter.subcategory === subcategory);

    if (isChecked) {
      setSelectedFilters(prevFilters => prevFilters.filter(filter => !(filter.category === category && filter.subcategory === subcategory)));
    } else {
      setSelectedFilters(prevFilters => [...prevFilters, { category, subcategory }]);
    }
  };

  // Toggle category expansion
  const toggleCategoryExpansion = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(prevExpanded => prevExpanded.filter(expanded => expanded !== category));
    } else {
      setExpandedCategories(prevExpanded => [...prevExpanded, category]);
    }
  };

  // Apply filters and notify parent component
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  return (
    <div className="bg-white p-4 rounded-lg text-gray-700 w-2/12">
      {/* Render category and subcategory checkboxes */}
      {Object.entries(filterOptions).map(([categoryName, categoryOptions]) => (
        <div key={categoryName} className="mb-4">
          <div className="flex items-center cursor-pointer" onClick={() => toggleCategoryExpansion(categoryName)}>
            <span className="font-semibold" style={{ color: '#515B6F', textTransform: 'capitalize' }}>{categoryName.replace(/_/g, ' ')}</span>
            {expandedCategories.includes(categoryName) ? (
              <FontAwesomeIcon icon={faAngleUp} className="ml-auto" />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} className="ml-auto transform rotate-180" />
            )}
          </div>
          {expandedCategories.includes(categoryName) && (
            <ul className="ml-4 my-2">
              {(categoryOptions as (string | { name: string; subfields: string[] })[]).map(option => (
                <li key={typeof option === 'string' ? option : option.name} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={() => handleCheckboxChange(categoryName, typeof option === 'string' ? option : option.name)}
                      checked={selectedFilters.some(filter => filter.category === categoryName && filter.subcategory === (typeof option === 'string' ? option : option.name))}
                    />
                    <span style={{ color: '#515B6F', textTransform: 'capitalize' }}>{typeof option === 'string' ? option : option.name}</span>
                    {typeof option !== 'string' && expandedCategories.includes(categoryName) && (
                      <ul className="ml-4">
                        {option.subfields.map(subfield => (
                          <li key={subfield} className="mb-1">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="mr-2"
                                onChange={() => handleCheckboxChange(categoryName, subfield)}
                                checked={selectedFilters.some(filter => filter.category === categoryName && filter.subcategory === subfield)}
                              />
                              <span style={{ color: '#515B6F', textTransform: 'capitalize' }}>{subfield}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default InternshipFilterSidebar;






