#!bin/bash

CHROME_ARGS="--headless \
--hide-scrollbars \
--no-sandbox \
--disable-setuid-sandbox \
--disable-dev-shm-usage \
--remote-debugging-address=$DEBUG_ADDRESS 
--remote-debugging-port=$DEBUG_PORT 
--user-data-dir=/data"

if [ -n "$CHROME_OPTS" ]; then
  CHROME_ARGS="${CHROME_ARGS} ${CHROME_OPTS}"
fi
 
CHROMIUM_ADDITIONAL_ARGS=$(echo $CHROMIUM_ADDITIONAL_ARGS | tr ',' ' ')
 
# Start Chrome
/usr/local/local-chromium-version/chrome-linux/chrome $CHROME_ARGS