import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Card from "../../elements/shared/card/Card";
import Input from "../../elements/shared/input/Input";

import { AppContext } from "../../context/AppContext";

import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import "./Sidebar.css";

interface ISearchImage {
  searchTerm: string;
}

interface IProps {
  openAside: boolean;
  handleOpen: () => void;
}

const Sidebar = ({ openAside, handleOpen }: IProps) => {
  const {
    state: { images },
  } = useContext(AppContext);

  const [filteredImages, setFilteredImages] = useState(images);

  const { register, watch } = useForm<ISearchImage>();

  useEffect(() => {
    const subscription = watch((value) => {
      const filtered = images.filter((item) =>
        item.title.toLowerCase().includes(value?.searchTerm?.toLowerCase()!)
      );
      setFilteredImages(filtered);
    });
    return () => subscription.unsubscribe();
  }, [watch, images]);

  return (
    <aside className={`sidebar ${openAside ? "show" : ""}`}>
      <BsArrowLeft className="sidebar-close" onClick={handleOpen} />
      <h2 className="sidebar-title">Image Gallery</h2>
      <Input
        {...register("searchTerm")}
        placeholder="Search showcase..."
        icon={<BiSearch className="right-icon" />}
      />
      <div className="sidebar-cards">
        {!filteredImages.length ? (
          <p>No images found</p>
        ) : (
          filteredImages.map((item) => (
            <Card key={item.id} image={item} handleOpen={handleOpen} />
          ))
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
