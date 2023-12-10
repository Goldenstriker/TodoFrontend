import checkedCircle from "../../assets/images/checkedCircle.svg";
import closeCircle from "./../assets/images/CloseCircle.svg";
import usericon from "../../assets/images/usericon.svg";
import pending from "../../assets/images/pending.svg";

export enum ImageIconEnum {
    CheckedIcon = 1,
    CloseIcon = 2,
    UserIcon = 3,
    PendingIcon = 4,
    Logo = 5
}

export function getImageSrc(imageIcon: ImageIconEnum) {
    switch (imageIcon) {
        case ImageIconEnum.CheckedIcon:
            return checkedCircle;
        case ImageIconEnum.PendingIcon:
            return pending;
    }
}