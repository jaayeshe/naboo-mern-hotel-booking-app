const Footer = () => {
  return (
    <div className="bg-teal-700 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-normnal">
          Naboo.com
        </span>
        <span className="text-white font-bold tracking-normal flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms & Conditions</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
