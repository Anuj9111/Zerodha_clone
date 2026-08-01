import nikhil from "../../../assets/nithinKamath.jpg";

export function Team() {
  return (
    <div>
      <div className="pb-20 ">
        <hr className="mx-auto ml-40 mr-40 border-gray-300" />
      </div>
      <div className=" w-full grid grid-cols-12 mb-15">
        <div className="col-span-2"></div>
        <div className="col-span-8 grid grid-cols-8 gap-15  ">
          <div className="col-span-4 p-5">
            <p className="leading-8">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <br />
            <p className="leading-8">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <br />
            <p className="leading-8">
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          <div className="col-span-4 p-5">
            <p className="leading-8">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <br />
            <p className="leading-8">
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <br />
            <p className="leading-8">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>


      <div className="text-4xl w-full flex justify-center mb-20">People</div>

      <div className="w-full grid grid-cols-12 mb-20">
        <div className="col-span-2"></div>
        <div className="col-span-8 grid grid-cols-8  m-auto">
          {/* <h1 className="text-3xl ">People</h1> */}

          <div className="space-y-1.5 col-span-4 pl-25">
            <img
              className=" border rounded-full w-[295px]"
              src={nikhil}
              alt="photo ceo"
            />
            <h1 className="text-[25px] text-gray-500 pl-15 ">Nithin Kamath</h1>
            <p className="test-[20px ] text-gray-500 pl-20">Founder, CEO</p>
          </div>

          <div className="col-span-4 pt-8">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <br />
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <br />
            <p>Playing basketball is his zen.</p>
            <br />
            <p>Connect on Homepage / TradingQnA / Twitter</p>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
