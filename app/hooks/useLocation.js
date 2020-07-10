import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
export default useLocation = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        try {
            (async () => {
                let { granted } = await Location.requestPermissionsAsync();
                if (!granted) {
                    console.log("Permission to access location was denied");
                    setLocation(null);
                    return;
                }
                let {
                    coords: { latitude, longitude }
                } = await Location.getCurrentPositionAsync({});
                console.log({ latitude, longitude });
                setLocation({ latitude, longitude });
            })();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return location;
};
