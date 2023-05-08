import React from 'react'

const DisplaySearchResults = ({ businessList }) => {

  console.log("displaysearchresults: " + JSON.stringify(businessList)) // for testing

  return (
    <ul>
      {Array.isArray(businessList) &&
        businessList.map((business) => (
          <>
            <ul key={business.name}>
              <p><li><strong>{business.name}</strong></li></p>
              {/* if value in businessList is null or undefined, values will not display */}
              <p>{business.location.address ||
                `${business.location.address1 ? business.location.address1 + '\n' : ''} 
                ${business.location.address2 ? business.location.address2 + '\n' : ''}
                ${business.location.address3 ? business.location.address3 + '\n' : ''}
                ${business.location.city ? business.location.city + ', ' : ''}
                ${business.location.state ? business.location.state + ' ' : ''}
                ${business.location.zipcode || ''}`}</p>

              <p>
                <img
                  src={business.businessImage ? business.businessImage : business.image_url}
                  alt={business.name}
                  style={{ maxWidth: '300px', maxHeight: '200px' }}
                />
              </p>

            </ul>
          </>
        ))}
    </ul>
  );
};


export default DisplaySearchResults;