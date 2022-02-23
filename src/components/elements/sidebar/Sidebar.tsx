import { useEffect, useState } from "react";
import InputIcon from "../others/InputIcon";

import { images } from "../../../fakeData";

import "./Sidebar.css";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    const filtered = images.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <aside>
      <h2>Image Gallery</h2>
      <InputIcon
        icon={<i className="fa fa-search"></i>}
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="cards_container">
        {filteredImages.map((item) => (
          <div className="card-search" key={item.id}>
            <img src={item.imageSmall} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
