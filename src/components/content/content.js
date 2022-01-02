import React from "react";
import "./content.css";

export default function Content() {
  return (
    <div className="content-container">
      <div className="first-parent-container">
        <div className="upload-asset-container container-blocks">
          <div className="upload-asset-title">Upload Asset Image</div>
          <div className="upload-asset-file-container">
            <div className="upload-asset-text-container">
              <p>Select jpg, png or gif file ....</p>
              <p>We recommend files under 10mb</p>
            </div>
            <div className="upload-button">
              <input
                className="input-file"
                type="file"
                accept=".png,.jpeg,.jpg,.gif"
                name="ChooseFile"
                title=" "
              />
              Choose File
            </div>
          </div>
        </div>
        <div className="collectible-name-container container-blocks">
          <div className="collectible-name-title">Collectible Name</div>
          <input className="collectible-name-input" type="text" placeholder="Collectible Name" />
        </div>
        <div className="asset-name-container container-blocks">
          <div className="asset-name-title">Asset Name</div>
          <input className="asset-name-input" type="text" placeholder="Choose the asset name..." />
        </div>
        <div className="description-container container-blocks">
          <div className="description-title">Description</div>
          <textarea className="description-input" type="text" placeholder="Description" />
        </div>
        <div className="price-units-container container-blocks">
          <div className="reserve-price-container">
            <div className="reserve-price-title">Reserve price</div>
            <input className="reserve-price-input" type="text" placeholder="Enter price..." />
          </div>
          <div className="units-container">
            <div className="units-title">Units</div>
            <input className="units-input" type="text" placeholder="Units" />
          </div>
        </div>
        <div className="properties-container container-blocks">
          <div className="properties-title">Properties</div>
          <div className="properties-inputs-container">
            <input className="properties-inputs-name" type="text" placeholder="Enter Name..." />
            <input className="properties-inputs-value" type="text" placeholder="Enter Value..." />
            <div className="properties-add-inputs-value">+ Add</div>
          </div>
        </div>
      </div>
      <div className="second-parent-container">
        <div className="request-nft-button">REQUEST NFT</div>
      </div>
    </div>
  );
}
