import axios from "axios";
import styled from "styled-components";
import React, {
  ChangeEvent,
  DragEventHandler,
  useEffect,
  useState,
} from "react";

const MulterComponent = (): JSX.Element => {
  const [curUrl, setCurUrl] = useState("");
  const [curImgFormData, setCurImgFormData] = useState<FormData | undefined>();
  const [selectedUrl, setSelectedUrl] = useState<string | ArrayBuffer | null>();
  const [moreImages, setMoreImages] = useState<boolean>(false);
  const [imageList, setImageList] = useState<Array<imgList>>([]);

  interface imgList {
    Key: string;
    LastModified: string;
    ETag: string;
    Owner: { ID: string };
    Size: Number;
    StorageClass: string;
  }

  const handleFile = (_file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedUrl(reader.result);
    };
    reader.readAsDataURL(_file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      const file = e.dataTransfer.files[0];
      formData.append("image", file || "");
      setCurImgFormData(formData);
      handleFile(file);
    } catch (err) {
      console.log(err);
    }
  };

  const setImageFormData = (e: ChangeEvent<HTMLInputElement>) => {
    let formData = new FormData();
    const file = e.target.files?.[0];
    formData.append("image", file || "");
    setCurImgFormData(formData);
    if (file) handleFile(file);
  };

  const requestImage = async () => {
    if (!curImgFormData) return;
    try {
      const {
        data: { url },
      } = await axios.post(
        "http://localhost:8080/api/images/image",
        curImgFormData
      );
      console.log(url);
      setMoreImages((state) => !state);
    } catch (err) {
      console.log(err);
    }
  };

  const requestObject = (_imgName: string) => {
    try {
      axios
        .post("http://localhost:8080/api/images/getObject", {
          url: _imgName,
        })
        .then(({ data }) => {
          console.log(data);
          setCurUrl(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const requestObjectList = () => {
    try {
      axios
        .post("http://localhost:8080/api/images/getObjectList")
        .then(({ data }) => {
          console.log(data);
          setImageList([...data]);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const makeImageUrl = (_imageName: string) => {
    const baseUrl = "https://nftrio-bucket.s3.ap-northeast-2.amazonaws.com/";
    const curUrl = baseUrl + _imageName;
    return curUrl;
  };

  useEffect(() => {
    requestObjectList();
  }, [moreImages]);

  return (
    <div id="imageEdit">
      <input
        type={"file"}
        id={"image_uploads"}
        name="image"
        accept="image/*"
        onChange={(e) => {
          setImageFormData(e);
        }}
      />
      <DropZone
        onDrop={(e) => {
          handleDrop(e);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        {selectedUrl ? <img src={selectedUrl?.toString()} /> : <></>}
      </DropZone>
      <button
        className="nftrio-button ac-pink"
        onClick={() => {
          requestImage();
        }}
      >
        파일 보냄
      </button>
      <img src={curUrl} />
      <ListImageBox>
        {imageList.map((item, index) => {
          return (
            <div key={"-div-" + index}>
              <StyledImage
                key={"-" + index}
                src={
                  "https://nftrio-bucket.s3.ap-northeast-2.amazonaws.com/" +
                  item
                }
              />
              <p>{item.Key}</p>
            </div>
          );
        })}
      </ListImageBox>
    </div>
  );
};

export default MulterComponent;

const DropZone = styled.div`
  width: 200px;
  height: 100px;
  background-color: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const ListImageBox = styled.div`
  width: 100%;
  display: flex;
  row-gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const StyledImage = styled.img`
  height: 100px;
  object-fit: contain;
`;
