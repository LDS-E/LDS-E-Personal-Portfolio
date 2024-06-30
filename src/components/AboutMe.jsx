const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-screen flex items-center justify-center bg-gray-400"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Experience 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis ante at augue accumsan tincidunt ut eget quam. Nullam
              feugiat, velit ut cursus consectetur, nisi massa convallis ligula,
              nec pharetra odio arcu in tortor.
            </p>
          </div>
          <div className="md:w-1/3 md:order-3">
            <h3 className="text-xl font-semibold mb-2">Experience 2</h3>
            <p className="text-gray-700">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Fusce nec augue ac magna ultrices
              hendrerit. Maecenas laoreet risus eu orci accumsan, at
              sollicitudin ex gravida.
            </p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Experience 3</h3>
            <p className="text-gray-700">
              Sed ultricies sit amet sapien sed bibendum. Nam ut magna ut risus
              dictum rhoncus. Morbi auctor arcu eu lorem eleifend gravida.
              Aliquam erat volutpat. Donec non eleifend elit. Duis malesuada
              neque nec suscipit fermentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
