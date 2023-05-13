import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import styled from "styled-components";
import Modal from "./ModalHOC";
import getImage from "../../utils/hooks/getImages";
import { BsFillPersonFill, BsFillShieldLockFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";

const { ModalAvatar } = getImage();

type PropType = {
  modal: boolean;
  showModal: Dispatch<SetStateAction<boolean>>;
};

const ManageWatchersModal = (props: PropType) => {
  const { modal, showModal } = props;
  const inputOnchange = () => {
    let timer: any;

    return (e: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        const value = e.target.value.trim();
        const wrapper = e.target.parentElement;

        if (value.length > 3) {
          wrapper!.style.border = "1px solid #162c64";
          return;
        }

        wrapper!.style.border = "1px solid red";
      }, 1000);
    };
  };

  const handleAddProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const inputs = [...e.currentTarget.querySelectorAll("input")];
    const errorEl = [...e.currentTarget.querySelectorAll("small")];
    let valid = true;

    const data = Object.fromEntries(formdata);

    inputs.forEach((input: HTMLInputElement, index) => {
      let name = input.name;
      if (data[name] === "") {
        errorEl[index].textContent = `${name} cannot be blank`;
        valid = false;
      }

      if (data[name].length < 4) {
        errorEl[index].textContent = `${name} cannot be less than 4 chracters`;
        valid = false;
      }

      if (name === "confirmPin" && data[name] !== data.profilePin) {
        errorEl[index].textContent = "Password mismatch";
        valid = false;
      }
    });

    if (!valid) return;

    errorEl.forEach((el: HTMLElement) => {
      el.textContent = "";
    });
  };

  return (
    <Modal modal={modal} showModal={showModal}>
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

        <form onSubmit={handleAddProfile}>
          <FormInput>
            <label htmlFor="profileName">Profile name</label>
            <div>
              <input
                autoComplete="off"
                onChange={inputOnchange()}
                required
                name="name"
                id="profileName"
                type="text"
              />
              <span>
                <BsFillPersonFill />
              </span>
            </div>
            <small></small>
          </FormInput>
          <FormInput>
            <label htmlFor="profilePin">Secrete pin</label>
            <div>
              <input
                onChange={inputOnchange()}
                required
                autoComplete="current-password"
                inputMode="numeric"
                minLength={4}
                name="profilePin"
                id="profilePin"
                type="password"
              />
              <span>
                <BsFillShieldLockFill />
              </span>
            </div>
            <small> </small>
          </FormInput>
          <FormInput>
            <label htmlFor="confirmPin">Confirm pin</label>
            <div>
              <input
                onChange={inputOnchange()}
                required
                autoComplete="current-password"
                inputMode="numeric"
                minLength={4}
                name="confirmPin"
                id="confirmPin"
                type="password"
              />
              <span>
                <GiPadlock />
              </span>
            </div>
            <small> </small>
          </FormInput>
          <FormInput>
            <button type="submit">Create</button>
          </FormInput>
        </form>
      </Wrapper>
    </Modal>
  );
};

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
