import TableSetup from "@/components/TableSetup";
import TableNumSetup from "@/components//TableNumSetup";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-19 grid-rows-11 gap-1 p-2">
        <div className="col-span-full bg-gray-950 flex flex-col items-center justify-center rounded-[3px] shadow-md">
          <p className="text-2xl font-bold text-white">Periodic Table</p>
          <p className="text-sm tracking-widest text-gray-600">
            Using Grid Tailwind CSS - by{" "}
            <span className="font-bold text-gray-500">binJAN</span>
          </p>
        </div>
        <TableNumSetup
          classNa=" shadow-none border-none"
          code="Group"
          name=""
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=""
          code="1"
          name="Hydrogen and Alkali Metals"
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=""
          code="2"
          name="Alkaline earth metals"
          color="text-gray-600"
        />
        <TableNumSetup classNa="" code="3" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="4" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="5" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="6" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="7" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="8" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="9" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="10" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="11" name="" color="text-gray-600" />
        <TableNumSetup classNa="" code="12" name="" color="text-gray-600" />
        <TableNumSetup
          classNa=""
          code="13"
          name="Triels"
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=""
          code="14"
          name="Tetrels"
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=""
          code="15"
          name="Pnictogens"
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=""
          code="16"
          name="Chalcogens"
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=""
          code="17"
          name="Halogens"
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=""
          code="18"
          name="Noble gases"
          color="text-gray-600"
        />
        <TableNumSetup
          classNa=" shadow-none border-none"
          code="Period"
          name="1"
          color="text-gray-600"
        />
        <TableSetup
          classNa="border-blue-700 hover:border-blue-500"
          name="Hydrogen"
          no="1"
          code="H"
          value="1.0080"
          color="text-blue-700"
          bg="hover:bg-blue-700"
        />
        <TableSetup
          classNa="col-start-[19] border-orange-600 hover:border-orange-300"
          name="Helium"
          no="2"
          code="He"
          value="4.0026"
          color="text-orange-600"
          bg="hover:bg-orange-600"
        />
        <TableNumSetup
          classNa="shadow-none border-none"
          code=""
          name="2"
          color="text-gray-600"
        />
        <TableSetup
          classNa="border-pink-500 hover:border-pink-400"
          name="Lithium"
          no="3"
          code="Li"
          value="6.941"
          color="text-pink-500"
          bg="hover:bg-pink-500"
        />
        <TableSetup
          classNa="border-purple-600 hover:border-purple-400"
          name="Beryllium"
          no="4"
          code="Be"
          value="9.0122"
          color="text-purple-600"
          bg="hover:bg-purple-600"
        />
        <TableSetup
          classNa="col-start-[14] border-green-600 hover:border-green-500"
          name="Boron"
          no="5"
          code="B"
          value="10.81"
          color="text-green-600"
          bg="hover:bg-green-600"
        />
        <TableSetup
          classNa="border-blue-700 hover:border-blue-500"
          name="Carbon"
          no="6"
          code="C"
          value="12.011"
          color="text-blue-700"
          bg="hover:bg-blue-700"
        />
        <TableSetup
          classNa="border-blue-700 hover:border-blue-500"
          name="Nitrogen"
          no="7"
          code="N"
          value="14.007"
          color="text-blue-700"
          bg="hover:bg-blue-700"
        />
        <TableSetup
          classNa="border-blue-700 hover:border-blue-500"
          name="Oxygen"
          no="8"
          code="O"
          value="15.999"
          color="text-blue-700"
          bg="hover:bg-blue-700"
        />
        <TableSetup
          classNa="border-yellow-400 hover:border-yellow-300"
          name="Fluorine"
          no="9"
          code="F"
          value="18.998"
          color="text-yellow-400"
          bg="hover:bg-yellow-400"
        />
        <TableSetup
          classNa="border-orange-600 hover:border-orange-300"
          name="Neon"
          no="10"
          code="Ne"
          value="20.180"
          color="text-orange-600"
          bg="hover:bg-orange-600"
        />
        <TableNumSetup
          classNa="shadow-none border-none"
          code=""
          name="3"
          color="text-gray-600"
        />
        <TableSetup
          classNa="border-pink-500 hover:border-pink-400"
          name="Sodium"
          no="11"
          code="Na"
          value="22.990"
          color="text-pink-500"
          bg="hover:bg-pink-500"
        />
        <TableSetup
          classNa="border-purple-600 hover:border-purple-400"
          name="Magnesium"
          no="12"
          code="Mg"
          value="24.305"
          color="text-purple-600"
          bg="hover:bg-purple-600"
        />
        <TableSetup
          classNa="col-start-[14] border-orange-400 hover:border-orange-300"
          name="Aluminum"
          no="13"
          code="Al"
          value="26.982"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-green-600 hover:border-green-500"
          name="Silicon"
          no="14"
          code="Si"
          value="28.085"
          color="text-green-600"
          bg="hover:bg-green-600"
        />
        <TableSetup
          classNa="border-blue-700 hover:border-blue-500"
          name="Phosphorus"
          no="15"
          code="P"
          value="30.974"
          color="text-blue-700"
          bg="hover:bg-blue-700"
        />
        <TableSetup
          classNa="border-blue-700 hover:border-blue-500"
          name="Sulfur"
          no="16"
          code="S"
          value="32.06"
          color="text-blue-700"
          bg="hover:bg-blue-700"
        />
        <TableSetup
          classNa="border-yellow-400 hover:border-yellow-300"
          name="Chlorine"
          no="17"
          code="Cl"
          value="35.45"
          color="text-yellow-400"
          bg="hover:bg-yellow-400"
        />
        <TableSetup
          classNa="border-orange-600 hover:border-orange-300"
          name="Argon"
          no="18"
          code="Ar"
          value="39.948"
          color="text-orange-600"
          bg="hover:bg-orange-600"
        />
        <TableNumSetup
          classNa="shadow-none border-none"
          code=""
          name="4"
          color="text-gray-600"
        />
        <TableSetup
          classNa="border-pink-500 hover:border-pink-400"
          name="Potassium"
          no="19"
          code="K"
          value="39.098"
          color="text-pink-500"
          bg="hover:bg-pink-500"
        />
        <TableSetup
          classNa="border-purple-600 hover:border-purple-400"
          name="Calcium"
          no="20"
          code="Ca"
          value="40.078"
          color="text-purple-600"
          bg="hover:bg-purple-600"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Scandium"
          no="21"
          code="Sc"
          value="44.956"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Titanium"
          no="22"
          code="Ti"
          value="47.867"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Vanadium"
          no="23"
          code="V"
          value="50.942"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Chromium"
          no="24"
          code="Cr"
          value="51.996"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Manganese"
          no="25"
          code="Mn"
          value="54.938"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Iron"
          no="26"
          code="Fe"
          value="55.845"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Cobalt"
          no="27"
          code="Co"
          value="58.933"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Nickel"
          no="28"
          code="Ni"
          value="58.693"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Copper"
          no="29"
          code="Cu"
          value="63.546"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Zinc"
          no="30"
          code="Zn"
          value="65.38"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Gallium"
          no="31"
          code="Ga"
          value="69.723"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-green-600 hover:border-green-500"
          name="Germanium"
          no="32"
          code="Ge"
          value="72.630"
          color="text-green-600"
          bg="hover:bg-green-600"
        />
        <TableSetup
          classNa="border-green-600 hover:border-green-500"
          name="Arsenic"
          no="33"
          code="As"
          value="74.922"
          color="text-green-600"
          bg="hover:bg-green-600"
        />
        <TableSetup
          classNa="border-blue-700 hover:border-blue-500"
          name="Selenium"
          no="34"
          code="Se"
          value="78.971"
          color="text-blue-700"
          bg="hover:bg-blue-700"
        />
        <TableSetup
          classNa="border-yellow-400 hover:border-yellow-300"
          name="Bromine"
          no="35"
          code="Br"
          value="79.904"
          color="text-yellow-400"
          bg="hover:bg-yellow-400"
        />
        <TableSetup
          classNa="border-orange-600 hover:border-orange-300"
          name="Krypton"
          no="36"
          code="Kr"
          value="83.798"
          color="text-orange-600"
          bg="hover:bg-orange-600"
        />
        <TableNumSetup
          classNa="shadow-none border-none"
          code=""
          name="5"
          color="text-gray-600"
        />
        <TableSetup
          classNa="border-pink-500 hover:border-pink-400"
          name="Rubidium"
          no="37"
          code="Rb"
          value="85.468"
          color="text-pink-500"
          bg="hover:bg-pink-500"
        />
        <TableSetup
          classNa="border-purple-600 hover:border-purple-400"
          name="Strontium"
          no="38"
          code="Sr"
          value="87.62"
          color="text-purple-600"
          bg="hover:bg-purple-600"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Yttrium"
          no="39"
          code="Y"
          value="88.906"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Zirconium"
          no="40"
          code="Zr"
          value="91.224"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Niobium"
          no="41"
          code="Nb"
          value="92.906"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Molybdenum"
          no="42"
          code="Mo"
          value="95.95"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Technetium"
          no="43"
          code="Tc"
          value="98"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Ruthenium"
          no="44"
          code="Ru"
          value="101.07"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Rhodium"
          no="45"
          code="Rh"
          value="102.91"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Palladium"
          no="46"
          code="Pd"
          value="106.42"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Silver"
          no="47"
          code="Ag"
          value="107.87"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Cadmium"
          no="48"
          code="Cd"
          value="112.41"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Indium"
          no="49"
          code="In"
          value="114.82"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Tin"
          no="50"
          code="Sn"
          value="118.71"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-green-600 hover:border-green-500"
          name="Antimony"
          no="51"
          code="Sb"
          value="121.76"
          color="text-green-600"
          bg="hover:bg-green-600"
        />
        <TableSetup
          classNa="border-green-600 hover:border-green-500"
          name="Tellurium"
          no="52"
          code="Te"
          value="127.60"
          color="text-green-600"
          bg="hover:bg-green-600"
        />
        <TableSetup
          classNa="border-yellow-400 hover:border-yellow-300"
          name="Iodine"
          no="53"
          code="I"
          value="126.90"
          color="text-yellow-400"
          bg="hover:bg-yellow-400"
        />
        <TableSetup
          classNa="border-orange-600 hover:border-orange-300"
          name="Xenon"
          no="54"
          code="Xe"
          value="131.29"
          color="text-orange-600"
          bg="hover:bg-orange-600"
        />
        <TableNumSetup
          classNa="shadow-none border-none"
          code=""
          name="6"
          color="text-gray-600"
        />
        <TableSetup
          classNa="border-pink-500 hover:border-pink-400"
          name="Cesium"
          no="55"
          code="Cs"
          value="132.91"
          color="text-pink-500"
          bg="hover:bg-pink-500"
        />
        <TableSetup
          classNa="border-purple-600 hover:border-purple-400"
          name="Barium"
          no="56"
          code="Ba"
          value="137.327"
          color="text-purple-600"
          bg="hover:bg-purple-600"
        />
        <div className="flex justify-center items-center flex-col font-bold text-xs text-white border-2 rounded-[3px] bg-lime-500 border-lime-600 hover:text-white hover:bg-lime-500 hover:border-lime-400 animate-pulse">
          <p>57 - 71</p>
        </div>
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Hafnium"
          no="72"
          code="Hf"
          value="178.49"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Tantalum"
          no="73"
          code="Ta"
          value="180.948"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Tungsten"
          no="74"
          code="W"
          value="183.84"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Rhenium"
          no="75"
          code="Re"
          value="186.207"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Osmium"
          no="76"
          code="Os"
          value="190.23"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Iridium"
          no="77"
          code="Ir"
          value="192.217"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Platinum"
          no="78"
          code="Pt"
          value="195.084"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Gold"
          no="79"
          code="Au"
          value="196.966"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Mercury"
          no="80"
          code="Hg"
          value="200.592"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Thallium"
          no="81"
          code="Tl"
          value="204.38"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Lead"
          no="82"
          code="Pb"
          value="207.2"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Bismuth"
          no="83"
          code="Bi"
          value="208.98"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-green-600 hover:border-green-500"
          name="Polonium"
          no="84"
          code="Po"
          value="209"
          color="text-green-600"
          bg="hover:bg-green-600"
        />
        <TableSetup
          classNa="border-yellow-400 hover:border-yellow-300"
          name="Astatine"
          no="85"
          code="At"
          value="210"
          color="text-yellow-400"
          bg="hover:bg-yellow-400"
        />
        <TableSetup
          classNa="border-orange-600 hover:border-orange-300"
          name="Radon"
          no="86"
          code="Rn"
          value="222"
          color="text-orange-600"
          bg="hover:bg-orange-600"
        />
        <TableNumSetup
          classNa="shadow-none border-none"
          code=""
          name="7"
          color="text-gray-600"
        />
        <TableSetup
          classNa="border-pink-500 hover:border-pink-400"
          name="Francium"
          no="87"
          code="Fr"
          value="223"
          color="text-pink-500"
          bg="hover:bg-pink-500"
        />
        <TableSetup
          classNa="border-purple-600 hover:border-purple-400"
          name="Radium"
          no="88"
          code="Ra"
          value="226"
          color="text-purple-600"
          bg="hover:bg-purple-600"
        />
        <div className="flex justify-center items-center flex-col font-bold text-xs text-white border-2 rounded-[3px] bg-red-600 border-red-700  hover:bg-red-600 hover:border-red-400 animate-pulse">
          <p>89 - 103</p>
        </div>
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Rutherfordium"
          no="104"
          code="Rf"
          value="267"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Dubnium"
          no="105"
          code="Db"
          value="268"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Seaborgium"
          no="106"
          code="Sg"
          value="271"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Bohrium"
          no="107"
          code="Bh"
          value="270"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Hassium"
          no="108"
          code="Hs"
          value="277"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Meitnerium"
          no="109"
          code="Mt"
          value="276"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Darmstadtium"
          no="110"
          code="Ds"
          value="281"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Roentgenium"
          no="111"
          code="Rg"
          value="282"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-sky-500 hover:border-sky-400"
          name="Copernicium"
          no="112"
          code="Cn"
          value="285"
          color="text-sky-500"
          bg="hover:bg-sky-500"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Nihonium"
          no="113"
          code="Nh"
          value="286"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Flerovium"
          no="114"
          code="Fl"
          value="289"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Moscovium"
          no="115"
          code="Mc"
          value="288"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-orange-400 hover:border-orange-300"
          name="Livermorium"
          no="116"
          code="Lv"
          value="290"
          color="text-orange-400"
          bg="hover:bg-orange-400"
        />
        <TableSetup
          classNa="border-yellow-400 hover:border-yellow-300"
          name="Tennessine"
          no="117"
          code="Ts"
          value="294"
          color="text-yellow-400"
          bg="hover:bg-yellow-400"
        />
        <TableSetup
          classNa="border-orange-600 hover:border-orange-300"
          name="Oganesson"
          no="118"
          code="Og"
          value="294"
          color="text-orange-600"
          bg="hover:bg-orange-600"
        />

        <TableSetup
          classNa="col-start-4 border-lime-500 hover:border-lime-400"
          name="Lanthanum" // Atomic number 57
          no="57"
          code="La"
          value="138.904"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Cerium" // Atomic number 58
          no="58"
          code="Ce"
          value="140.116"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Praseodymium" // Atomic number 59
          no="59"
          code="Pr"
          value="140.907"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Neodymium" // Atomic number 60
          no="60"
          code="Nd"
          value="144.242"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Promethium" // Atomic number 61
          no="61"
          code="Pm"
          value="145"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Samarium" // Atomic number 62
          no="62"
          code="Sm"
          value="150.36"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Europium" // Atomic number 63
          no="63"
          code="Eu"
          value="151.964"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Gadolinium" // Atomic number 64
          no="64"
          code="Gd"
          value="157.25"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Terbium" // Atomic number 65
          no="65"
          code="Tb"
          value="158.925"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Dysprosium" // Atomic number 66
          no="66"
          code="Dy"
          value="162.500"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Holmium" // Atomic number 67
          no="67"
          code="Ho"
          value="164.930"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Erbium" // Atomic number 68
          no="68"
          code="Er"
          value="167.259"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Thulium" // Atomic number 69
          no="69"
          code="Tm"
          value="168.934"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Ytterbium" // Atomic number 70
          no="70"
          code="Yb"
          value="173.04"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />
        <TableSetup
          classNa="border-lime-500 hover:border-lime-400"
          name="Lutetium"
          no="71"
          code="Lu"
          value="174.966"
          color="text-lime-500"
          bg="hover:bg-lime-500"
        />

        <TableSetup
          classNa="col-start-4 border-red-600 hover:border-red-400"
          name="Actinium" // Atomic number 89
          no="89"
          code="Ac"
          value="227"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Thorium" // Atomic number 90
          no="90"
          code="Th"
          value="232.038"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Protactinium" // Atomic number 91
          no="91"
          code="Pa"
          value="231.035"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Uranium" // Atomic number 92
          no="92"
          code="U"
          value="238.028"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Neptunium" // Atomic number 93
          no="93"
          code="Np"
          value="237"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Plutonium" // Atomic number 94
          no="94"
          code="Pu"
          value="244"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Americium" // Atomic number 95
          no="95"
          code="Am"
          value="243"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Curium" // Atomic number 96
          no="96"
          code="Cm"
          value="247"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Berkelium" // Atomic number 97
          no="97"
          code="Bk"
          value="247"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Californium" // Atomic number 98
          no="98"
          code="Cf"
          value="251"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Einsteinium" // Atomic number 99
          no="99"
          code="Es"
          value="252"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Fermium" // Atomic number 100
          no="100"
          code="Fm"
          value="257"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Mendelevium" // Atomic number 101
          no="101"
          code="Md"
          value="258"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Nobelium" // Atomic number 102
          no="102"
          code="No"
          value="259"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
        <TableSetup
          classNa="border-red-600 hover:border-red-400"
          name="Lawrencium"
          no="103"
          code="Lr"
          value="266"
          color="text-red-600"
          bg="hover:bg-red-600"
        />
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-3 text-sm text-white w-3/4 mx-auto my-12">
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-pink-500"></span>
          <p>Alkali Metals</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-sky-500"></span>
          <p>Transition Metals</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-green-600"></span>
          <p>SemiMetals</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-yellow-400"></span>
          <p>Halogen</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-lime-500"></span>
          <p>Lanthanides</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-purple-600"></span>
          <p>Alkaline Earth Metals</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-orange-400"></span>
          <p>Basic Metals</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-blue-700"></span>
          <p>Nonmetals</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-orange-600"></span>
          <p>Noble Gases</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="w-5 h-5 rounded-sm animate-spin bg-red-600"></span>
          <p>Actinides</p>
        </div>
      </div>
    </div>
  );
}
