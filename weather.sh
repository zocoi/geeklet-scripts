# San Francisco WOEID is 12797153
curl --silent "http://weather.yahooapis.com/forecastrss?w=12797153&u=c" | grep -E '(Current Conditions:|C<BR)' | tail -n1 | sed -e 's/<BR \/>//' -e 's/\(.*\), \(.*\) C$/\2˚C/'
