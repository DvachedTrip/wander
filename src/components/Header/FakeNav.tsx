function FakeNav() {
  return (
    <section className="flex justify-between text-gray-600 text-[10px] pb-6">
      <div>
        LAT: 40.7128° N<br />
        LON: 74.0060° W<br />
        ALT: 124M
      </div>
      <div>
        SIGNAL: STRONG
        <br />
        SATS: 12 ACTIVE
        <br />
        OS: V4.2.0
      </div>
    </section>
  );
}

export default FakeNav;
