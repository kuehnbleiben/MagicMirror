/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "0.0.0.0", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: [], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "de",
    zoom: 0.9,
    timeFormat: 24,
    units: "metric",
    // serverOnly:  true/false/"local" ,
    // local for armv6l processors, default
    //   starts serveronly and then starts chrome browser
    // false, default for all  NON-armv6l devices
    // true, force serveronly mode, because you want to.. no UI on this device

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "calendar",
            position: "top_left",
            config: {
                maximumEntries: 9,
                calendars: [
                    {
                        symbol: 'birthday-cake',
                        url: 'https://calendar.google.com/calendar/ical/4cqkso242fe8bud3qtvfsk09tc%40group.calendar.google.com/private-e49ec7e6006dedb41c9af5b1ab4f9acb/basic.ics'
                    }
                ]
            }
        },
        {
            module: "compliments",
            position: 'bottom_bar',
            config: {
                remoteFile: 'compliments.json'
            }
        },
        {
            module: 'currentweather',
            position: 'top_center',
            header: 'Karlsruhe',
            config: {
                showHumidity: true,
                location: 'Karlsruhe',
                locationID: '2892794',
                appid: '06150ae597659622cc33e48357cae895',
            }
        },
        {
            module: 'weatherforecast',
            position: 'top_center',
            config: {
                appendLocationNameToHeader: false,
                roundTemp: true,
                showRainAmount: true,
                location: 'Karlsruhe, DE',
                locationID: '2892794',
                appid: '06150ae597659622cc33e48357cae895'
            }
        },
        {
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [
                    {
                        title: 'IWI-News',
                        url: 'http://www.iwi.hs-karlsruhe.de/iwii/REST/rssfeed/newsbulletinboard/INFB'
                    },
                    {
                        title: 'Tagesschau',
                        url: 'http://www.tagesschau.de/xml/rss2'
                    },
                    {
                        title: 'Resident Advisor',
                        url: 'https://www.residentadvisor.net/xml/rss_news.xml'
                    }
                ],
                showDescription: true,
                lengthDescription: 200,
                ignoreOldItems: true,
                ignoreOlderThan: 3600 * 24000 * 2
            }
        },
        {
            module: 'MMM-Spotify',
            position: 'top_right',
            config: {
                control: 'hidden'
            }
        },
        {
            module: 'MMM-Remote-Control',
            config: {}
        },
        {
            module: 'MMM-ip',
            position: 'bottom_left',
            config: {
                startHidden: true
            }
        },
        {
            module: 'MMM-SystemStats',
            position: 'top_left',
            config: {
                label: 'icon',
                useSyslog: true
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}
