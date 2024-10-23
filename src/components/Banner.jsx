import { useState } from "react";
import List from "./List";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Banner() {
  let [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("Lorem Ipsum");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro expedita inventore ullam corporis rerum harum cupiditate distinctio libero, fugiat suscipit, aut odit at dolores repellat minima dolorum officia culpa."
  );

  const [profilePic, setProfilePic] = useState(
    "https://img.freepik.com/premium-photo/avatar-resourcing-company_1254967-6653.jpg?semt=ais_hybrid"
  );
  const [perosnalInfo, setPerosnalInfo] = useState([
    { icon: "fa fa-phone", text: "+0123456869", direction: "" },
    { icon: "fa fa-envelope", text: "hello@xyz.com", direction: "" },
    {
      icon: "fa fa-location-arrow",
      text: "Earth, Milky Way Galaxy",
      direction: "",
    },
  ]);
  const [socialLinks, setSocialLinks] = useState([
    {
      icon: "fa fa-github",
      text: "Kaizen.Aro",
      direction: "flex-row-reverse",
    },
    {
      icon: "fa fa-linkedin",
      text: "link.in/Kaizen.Aro",
      direction: "flex-row-reverse",
    },
  ]);

  const changeProfileImage = (file) => {
    if (file) {
      const newProfilePicUrl = URL.createObjectURL(file);
      setProfilePic(newProfilePicUrl);
    }
  };

  const handlePersonalInfoChange = (index, newValue) => {
    const updatedInfo = [...perosnalInfo];
    updatedInfo[index].text = newValue;
    setPerosnalInfo(updatedInfo);
  };
  const handleSocialLinksChange = (index, newValue) => {
    const updatedInfo = [...socialLinks];
    updatedInfo[index].text = newValue;
    setSocialLinks(updatedInfo);
  };
  return (
    <>
      <div className="mt-2 flex justify-end hide-on-print">
        <span
          className="bg-black text-white py-2 px-4 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Edit Info
        </span>
      </div>
      <div>
        <div className="flex items-end justify-between pt-[55px]">
          <List items={perosnalInfo} />
          <img
            className="rounded-[50%] w-40 max-h-40"
            src={profilePic}
            alt=""
          />
          <List items={socialLinks} />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] mt-[15px]">
        <h1 className="text-center text-2xl font-bold">{name}</h1>
        <p className="text-center font-normal">{bio}</p>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-start justify-center p-4 overflow-y-scroll">
          <DialogPanel className="max-w-3xl min-w-[500px] space-y-4 border bg-black p-12 text-white rounded-[8px]">
            <DialogTitle className="font-bold">Edit Info</DialogTitle>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Upload Image
                </label>
                <input
                  type="file"
                  onChange={(e) => changeProfileImage(e.target.files[0])}
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  About
                </label>
                <textarea
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={perosnalInfo[0].text}
                  onChange={(e) => handlePersonalInfoChange(0, e.target.value)}
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={perosnalInfo[1].text}
                  onChange={(e) => handlePersonalInfoChange(1, e.target.value)}
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Address
                </label>
                <input
                  type="text"
                  value={perosnalInfo[2].text}
                  onChange={(e) => handlePersonalInfoChange(2, e.target.value)}
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Github
                </label>
                <input
                  type="url"
                  value={socialLinks[0].text}
                  onChange={(e) => handleSocialLinksChange(0, e.target.value)}
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Linkedin
                </label>
                <input
                  type="url"
                  value={socialLinks[1].text}
                  onChange={(e) => handleSocialLinksChange(1, e.target.value)}
                  className="rounded-sm p-1 mt-1 w-full text-sm text-white-700 bg-neutral-900 border border-neutral-700 focus:outline-none"
                />
              </div>
            </form>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Update</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
