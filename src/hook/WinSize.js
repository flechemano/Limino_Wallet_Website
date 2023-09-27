import React, { useState, useEffect, useCallback } from 'react';
import {
  message,
} from 'antd';
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  function debounce(fn, delay = 1000) {
    let timer;
    return function () {
      window.clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        window.clearTimeout(timer);
      }, delay);
    };
  }
  const onResize = useCallback(() => {
    const { device } = getDevice();
    // console.log(device);
    if (device === 'mobile') {
      setSize({
        width: 375,
        height: document.documentElement.clientHeight,
      });
    } else {
      setSize({
        width: 1920,
        height: document.documentElement.clientHeight,
      });
    }
  }, []);
  const getDevice = () => {
    let agent = navigator.userAgent.toLowerCase();
    // message.error(agent);
    let result = {
      device: (function () {
        if (/windows/.test(agent)) {
          return 'pc';
        } else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
          return 'mobile';
        } else if (/ipad/.test(agent) && /mobile/.test(agent)) {
          return 'mobile';
        } else if (/android/.test(agent)) {
          return 'mobile';
        } else if (/linux/.test(agent)) {
          return 'pc';
        } else if (/mac/.test(agent)) {
          return 'pc';
        } else {
          return 'pc';
        }
      })(),
    };
    return result;
    // console.log(result);
  };
  const debouncedOnResize = debounce(onResize);
  useEffect(() => {
    const { device } = getDevice();
    // message.info(`当前设备为${device}`);
    if (device === 'mobile') {
      setSize({
        width: 1920,
        height: document.documentElement.clientHeight,
      });
    } else {
      setSize({
        width: 1920,
        height: document.documentElement.clientHeight,
      });
    }
    window.addEventListener('resize', debouncedOnResize);
    return () => {
      window.removeEventListener('resize', debouncedOnResize);
    };
  }, []);

  return size;
}
export default useWinSize;
