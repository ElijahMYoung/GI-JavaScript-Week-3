privateInfo = () => {
  const ppi = {
    name: "Bert",
    ssn: 123456789,
  };
  return (() => ppi.name)();
};

getName = (i) => i;
console.log(getName(privateInfo()));
