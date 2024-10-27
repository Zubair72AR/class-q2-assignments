import TableSetup from "@/components/TableSetup";

export default function Home() {
  return (
    <div className="grid grid-cols-[20] grid-rows-10 gap-1">
      <TableSetup
        classNa="col-span-2 row-span-3"
        name="Hydrogen"
        no="1"
        code="H"
        value="1.0080"
        color="-blue-500"
      />
      <TableSetup
        classNa="grid-span-2"
        name="Hydrogen"
        no="1"
        code="H"
        value="1.0080"
        color="-green-500"
      />
      <TableSetup
        classNa="grid-span-2"
        name="Hydrogen"
        no="1"
        code="H"
        value="1.0080"
        color="-orange-500"
      />
      <TableSetup
        classNa="grid-span-2"
        name="Hydrogen"
        no="1"
        code="H"
        value="1.0080"
        color="-red-500"
      />
      <TableSetup
        classNa="grid-span-2"
        name="Hydrogen"
        no="1"
        code="H"
        value="1.0080"
        color="-red-500"
      />
    </div>
  );
}
