import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                borderGrey: "#F7F7F7",
                blueDarker: "#243C7B",
                blueDark: "#3D5DB2",
                blueLight: "#C4DEFF",
                blueBright: "#1447E6",
                purpleLight: "#F3E8FF",
                purpleDark: "#8200DB",
                greenLight: "#E7FFE1",
                greenDark: "#145E00",
                greenMid: "#1DB100",
                redMid: "#D82C2C",
                redLight: "#FDEEEE",
                greyText: "#787486",
            },
        },
    },
    plugins: [],
};

export default config;