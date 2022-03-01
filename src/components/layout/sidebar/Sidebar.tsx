import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import InputIcon from "../../elements/others/InputIcon";
import { BiSearch } from "react-icons/bi";
import "./Sidebar.css";
import Card from "../../elements/others/Card";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    state: { images },
  } = useContext(AuthContext);
  const [filteredImages, setFilteredImages] = useState(images);
  useEffect(() => {
    const filtered = images.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm, images]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <aside>
      <h2>Image Gallery</h2>
      <InputIcon
        rightIcon={<BiSearch />}
        placeholder="Search showcase..."
        inputClass="input-field"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="cards_container">
        {filteredImages.length === 0 && <p>No images found</p>}
        {filteredImages.map((item) => (
          <Card key={item.id} image={item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
