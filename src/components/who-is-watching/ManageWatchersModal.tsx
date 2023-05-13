import styled from "styled-components";
import Modal from "./ModalHOC";
import getImage from "../../utils/hooks/getImages";
import { BsFillPersonFill, BsFillShieldLockFill } from "react-icons/bs";

const { RedCircularDottedBg, ModalAvatar } = getImage();

const ManageWatchersModal = () => {
  return (
    <Modal>
      <Wrapper>
        <div className="img_wrapper f justify-center  items-center">
          <img
            src={ModalAvatar}
            alt="Computer stickers created by inipagistudio - Flaticon"
          />
        </div>

        <div className="modal_heading">
          <h4>Add new profile</h4>
          <p>
            Create a new secured watch profile, manage your favourites and watch
            history privately
          </p>
        </div>

        <form>
          <FormInput>
            <label htmlFor="profileName">Profile name</label>
            <div>
              <input name="profileName" id="profileName" type="text" />
              <span>
                <BsFillPersonFill />
              </span>
            </div>
            <small>error text</small>
          </FormInput>
          <FormInput>
            <label htmlFor="profilePin">Secrete pin</label>
            <div>
              <input name="profilePin" id="profilePin" type="password" />
              <span>
                <BsFillShieldLockFill />
              </span>
            </div>
            <small> </small>
          </FormInput>
          <FormInput>
            <label htmlFor="confirmPin">Confirm pin</label>
            <div>
              <input name="confirmPin" id="confirmPin" type="password" />
              <span>
                <BsFillShieldLockFill />
              </span>
            </div>
            <small> </small>
          </FormInput>
          <FormInput>
            <button>Create</button>
          </FormInput>
        </form>
      </Wrapper>
    </Modal>
  );
};
// inipagistudio;
export default ManageWatchersModal;
const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 20px 10px;
  color: #162c64;

  .img_wrapper {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: calc(100% + 3px);
      height: calc(100% + 3px);
    }
  }

  .modal_heading {
    text-align: center;
    margin-top: 15px;

    h4 {
      font-weight: 600;
    }

    p {
      font-size: 13px;
      padding: 5px;
      opacity: 0.65;
    }
  }
`;

const FormInput = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    border: 1px solid #162c64;
    padding: 0px 10px;
    border-radius: 10px;
  }

  label {
    padding: 3px 0px;
    display: block;
    font-size: 15px;
    font-weight: 500;
  }

  small {
    color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
  }

  span {
    font-size: 1.8rem;
    color: #162c64;
    color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
    display: flex;
    align-items: center;
  }

  input {
    padding: 10px 0px;
    width: 100%;
    margin-right: 10px;
  }

  button {
    display: block;
    width: min(95%, 250px);
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    color: white;
    text-transform: uppercase;
    background: linear-gradient(
      to right,
      #162c64,
      65%,
      ${({ theme }: { theme: ThemeType }) => theme.primaryRed}
    );
  }
`;
