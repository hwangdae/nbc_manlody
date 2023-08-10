


import React, { useEffect, useState } from "react";
import AlbumReview from "../components/detail-album/review/AlbumReview";
import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { accessToken } from "../components/Header";

type Props = {
  userId: string;
  comment: ReviewCommentData;
  changeListener: number;
};

interface ReviewCommentData {
  userId: string;
  userName: string;
  content: string;
  albumId: string;
  createdAt: number;
  isUpdated: boolean;
  docId?: string;
}

const DetailAlbum = () => {
  const { album_id: albumId } = useParams();
  const [album, setAlbum] = useState<any[]>([]);
  const [openReview, setOpenReview] = useState(true);
  const location = useLocation();
  console.log("location.state=>", location.state);
  // console.log("location.state.arr=>",location.state.arr)
  const albumData = location.state.track;
  console.log("albumData=>", albumData);

  const headers = {
    Authorization: `Bearer ${accessToken}`, // accessToken 변수에 실제 access token 값이 들어가야 합니다.
  };

  console.log("album=>", album);
  console.log("album=>", album[0]);

  useEffect(() => {
    const getAlbumId = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, { headers });
      console.log("response.data.items++====<>>=>", response.data.items);
      setAlbum([...response.data.items]);
      // return response.data
    };
    getAlbumId();
  }, [albumId]);


  // const optBtnRef = useRef(null);
  // const handleWindowClick = (e: MouseEvent) => {
  //   if (e.target !== optBtnRef.current) setIsOptBoxShow(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleWindowClick);
  // }, []);

  return (
    <AlbumTag>
      <div className="album-info">
        <img src={albumData.albumUrl} alt="image" />

        <div className="info-data">
          <h1>{albumData.name}</h1>
          <div>
            <p>{albumData.album_type}</p>
            <p>{albumData.release_date}</p>
          </div>
          <p className="artist-name">{albumData.artist}</p>
        </div>
        <button onClick={()=>(setOpenReview(!openReview))}>리뷰남기기</button>
      </div>
      {openReview ? (
        <div className="result-album">
          {album.map((item: any, index) => {
            if (index < 5)
              return (
                <div key={item.uri}>
                  <div>{item.name || "없음"}</div>
                  <div>{item.uri}</div>
                </div>
              );
          })}
        </div>
      ) : (
        <AlbumReview />
      <ReviewBox data={data}/>
      )}
    </AlbumTag>
  );
};

export default DetailAlbum;


const Main = styled.main`
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */ 
    border-radius: 10px;
}
&::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
}
`;
const AlbumWrap = styled.div`
  display: flex;
  padding: 50px 0px;
  align-items: end;
  gap: 30px;
  > div {
    width: 240px;
    height: 240px;
    background: red;
    box-shadow: 6px 6px 10px rgba(136, 136, 136, 0.1);
  }
  > h1 {
    font-size: 62px;
    color: #000;
    font-weight: bold;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 0.7fr 0.7fr 0.7fr;
  padding: 10px 0px;
  color: #000;
`;
const GridItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-size: 14px;
  &:nth-child(5),
  :nth-child(6) {
    justify-content: center;
  }
  & > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  & > div > h1 {
    font-size: 16px;
    letter-spacing: -0.5px;
  }
  & > div > p {
    font-size: 14px;
    letter-spacing: -0.5px;
    color: #bdbdbd;
  }
`;
const BodyGrid = styled(Grid)`
  padding: 10px 0px;
  /* border-radius: 10px; */
  margin: 6px 0px;
  background: #353535;
  color: #fff;
  &:hover {
    background: #3f3f3f;
  }
`;

const CommentWrap = styled.div`
  padding: 20px 0px;
`;
const CommentWiteForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  > input {
    width: 100%;
    padding: 10px 0px;
    outline: none;
    border-radius: 7px;
    background: #999;
    border: none;
  }
  > button {
    background: #999;
    border: none;
    border-radius: 7px;
    color: #fff;
  }
`;
const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 16px 10px;
  border-bottom: solid 1px #adadad;
`;

const ToggleButton = styled.p`
  position: relative;
  left: 0px;
  top: 0px;
`;
const ToggleBoxWrap = styled.div`
  position: absolute;
  right: 0px;
  bottom: 30px;
  width: 100px;
  background: #eee;
  border-radius: 7px;
  text-align: center;
`;

const AlbumTag = styled.div`
  margin: 0;
  .album-info {
    display: flex;
    // justify-content: center;
    align-items: end;
    img {
      width: 180px;
    }
  }
  .info-data {
    margin-left: 10px;
    margin-bottom: 0;
    bottom: 0;
    h1 {
      font-size: 3rem;
      font-weight: 600;
    }
    p {
      font-size: 18px;
      margin-top: 10px;
    }
    .artist-name {
      margin-top: 20px;
    }
  }
`;
