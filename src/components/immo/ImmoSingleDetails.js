import React from 'react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import { convertDateWithSlash } from '../helpers/convertDate';

const renderRow = (label, text) => {
  if (typeof text == 'string' && text.substring(text.length - 2) == ', ') {
    text = text.substring(0, text.length - 2);
  }
  return (
    <div className="property-meta-block__row">
      <div className="row-label">{label}</div>
      <div className="row-field">{text}</div>
    </div>
  );
};
const ImmoSingleDetails = ({ pand, content: { texts: { titles, subTitles, options } } }) => {
  if (pand) {
    const { node } = pand;
    return (
      <div className="immo-content-single__meta property-meta">
        <h2>{node.locationAdres}</h2>
        <div className="property-meta-block">
          <div className="property-meta-block__title">
            <h6>{titles.generalInformation}</h6>
          </div>
          {node.type && renderRow(subTitles.propertyType, node.type.title)}
          {(node.horecaFurnished || node.horecaEstimatedArea) &&
            renderRow(
              subTitles.horecaPart,
              `${node.horecaFurnished ? options.furnished + ', ' : ''}${
                node.horecaEstimatedArea ? node.horecaEstimatedArea + 'm²' : ''
              }`
            )}
          {(node.kitchen || node.kitchenSize || node.kitchenType) &&
            renderRow(
              subTitles.kitchen,
              `${node.kitchen && !node.kitchenSize && !node.kitchenType ? options.yes + ', ' : ''}${
                node.kitchenType === true ? options.basic + ', ' : ''
              }${node.kitchenType === false ? options.extended + ', ' : ''} ${
                _get(node, 'kitchenSize') ? _get(node, 'kitchenSize') + 'm²' : ''
              }`
            )}
          {(node.zaal || node.zaalSize) &&
            renderRow(
              subTitles.room,
              `${node.zaal && !node.zaalSize ? options.yes : ''}${node.zaalSize} m²`
            )}
          {(node.terrace || node.terraceSize) &&
            renderRow(
              subTitles.terrace,
              `${node.terrace && !node.terraceSize ? options.yes : ''}${
                node.terraceSize ? node.terraceSize + 'm²' : ''
              }`
            )}
          {(node.parking || node.parkingAmount || node.parkingType) &&
            renderRow(
              subTitles.parking,
              `${
                node.parking && !node.parkingAmount && !node.parkingType ? options.yes + ', ' : ''
              }${node.parkingType === true ? options.private : ''}${
                node.parkingType === false ? options.public : ''
              }${
                node.parkingType && node.parkingAmount
                  ? ' (' + node.parkingAmount + ' ' + options.parkingPlaces + ' )'
                  : ''
              }`
            )}
          {(node.house || node.houseRooms || node.houseTerrace || node.houseGarden) &&
            renderRow(
              subTitles.house,
              `${
                node.house && !node.houseRooms && !node.houseGarden && !node.houseTerrace
                  ? options.yes
                  : ''
              }${node.houseRooms ? node.houseRooms + ' ' + options.sleepingRooms : ''}${
                node.houseGarden === true ? ', ' + options.garden : ''
              }${node.houseTerrace ? ', ' + options.privateTerrace : ''}`
            )}
          {node.condition && renderRow(subTitles.condition, _get(node, 'condition.title'))}
        </div>
        <div className="property-meta-block">
          <div className="property-meta-block__title">
            <h6>{titles.location}</h6>
          </div>
          {node.locationAdres && renderRow(subTitles.adres, node.locationAdres)}
          {node.positionLocatedNear &&
            renderRow(
              subTitles.position,
              _map(node.positionLocatedNear, (item, index) => (index === 0 ? item : `, ${item}`))
            )}
          {node.positionCorner &&
            renderRow(subTitles.cornerBuilding, node.positionCorner ? options.yes : '')}
        </div>
        {(node.availability || node.availableFromDate) && (
          <div className="property-meta-block">
            <div className="property-meta-block__title">
              <h6>{titles.availability}</h6>
            </div>
            {(node.availability || node.availableFromDate) &&
              renderRow(
                subTitles.availableFrom,
                `${
                  node.availability && !node.availableFromDate ? options.immediatelyAvailable : ''
                }${
                  !node.availability && node.availableFromDate
                    ? convertDateWithSlash(node.availableFromDate)
                    : ''
                }`
              )}
          </div>
        )}

        {node.extraInfo && (
          <div className="property-meta-block">
            <div className="property-meta-block__title">
              <h6>{titles.extraInfo}</h6>
            </div>
            <div className="property-meta-block__row">
              <div className="row-label" style={{ width: '100%' }}>
                {
                  node.extraInfo
                }
              </div>
            </div>
          </div>
        )}

        <div className="property-meta-block">
          <div className="property-meta-block__title">
            <h6>{titles.contactUs}</h6>
          </div>

          {_get(node, 'contact[0].fields.telephone') &&
            renderRow(subTitles.phone, _get(node, 'contact[0].fields.telephone'))}
          {_get(node, 'contact[0].fields.email') && (
            <div className="property-meta-block__row">
              <div className="row-label">{subTitles.email}</div>
              <div className="row-field">
                <a href={`mailto:${_get(node, 'contact[0].fields.email')}`}>
                  {_get(node, 'contact[0].fields.email')}
                </a>
              </div>
            </div>
          )}
          {_get(node, 'contact[0].fields.fax') && renderRow(subTitles.fax, _get(node, 'contact[0].fields.fax'))}
        </div>
      </div>
    );
  }
  return null;
};
export default ImmoSingleDetails;
