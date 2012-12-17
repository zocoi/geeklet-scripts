# Install icalBuddy at http://hasseg.org/icalBuddy/

/usr/local/bin/icalBuddy -nc -n -f eventsToday+1 | sed -e "s/*/--/" | sed -e "s/\!/\!/"