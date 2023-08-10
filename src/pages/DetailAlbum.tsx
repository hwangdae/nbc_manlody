import React, { useState } from "react";
import { styled } from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ReviewBox from "../components/detail-album/review/ReviewBox";
import AlbumReview from "../components/detail-album/review/AlbumReview";
import Review from "../components/detail-album/review/Review";
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

const DetailAlbum = ({data}:any) => {
  const { album_id: albumId } = useParams();
  const [isCheck, setIsCheck] = useState<boolean>();

  console.log(albumId)

  const fetchToggleButton = () => {
    setIsCheck(!isCheck);
  };
  return (
    <Main>
      <AlbumWrap>
        <div>이미지</div>
        <h1>MELTDOWN (feat. Drake)</h1>
      </AlbumWrap>
      <Grid>
        <GridItem>#</GridItem>
        <GridItem>곡 정보</GridItem>
        <GridItem>앨범 정보</GridItem>
        <GridItem>날짜</GridItem>
        <GridItem>좋아요</GridItem>
        <GridItem>재생 시간</GridItem>
      </Grid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <BodyGrid>
        <GridItem>1</GridItem>
        <GridItem>
          <p
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              marginRight: "10px",
            }}
          ></p>
          <div>
            <h1>We’re Good</h1>
            <p>Dua Lipa</p>
          </div>
        </GridItem>
        <GridItem>Future Nostelgia (The Moonlight Edition)</GridItem>
        <GridItem>3일 전</GridItem>
        <GridItem>♥</GridItem>
        <GridItem>2:45</GridItem>
      </BodyGrid>
      <AlbumReview/>
      <ReviewBox data={data}/>
      {/* <CommentWrap>
        <CommentWiteForm>
          <input></input>
          <button>REGISTER</button>
        </CommentWiteForm>
        <Comment>
          <h1>작성자</h1>
          <h2>수록곡 전부 제 플리에 담았어요 너무 좋아요 !! 추천해요 !</h2>
          <p>작성날짜</p>
          <p>♥</p>
          <ToggleButton onClick={fetchToggleButton}>
            <BsThreeDots />
            <ToggleBoxWrap>
              <p>수정하기</p>
              <p>삭제하기</p>
            </ToggleBoxWrap>
          </ToggleButton>

          {isCheck ? <></> : <></>}
        </Comment>
      </CommentWrap> */}
    </Main>
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
