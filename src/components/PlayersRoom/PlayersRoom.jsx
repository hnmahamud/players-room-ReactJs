import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import SideCart from '../SideCart/SideCart';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const PlayersRoom = () => {
  const [playersData, setPlayersData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [selectAction, setSelectAction] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('players.json');
        const { data } = response;

        setTempData(data);

        const newPlayersData = [];
        const getSelectedPlayer = JSON.parse(localStorage.getItem('players-cart'));
        if (getSelectedPlayer && getSelectedPlayer.length > 0) {
          data.forEach((pd) => {
            if (getSelectedPlayer.includes(pd.id)) {
              newPlayersData.push({ ...pd, selected: true });
            } else {
              newPlayersData.push({ ...pd, selected: false });
            }
          });
          setPlayersData(newPlayersData);
        } else {
          setPlayersData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);


  useEffect(() => {
    const newPlayersData = [];
    const getSelectedPlayer = JSON.parse(localStorage.getItem('players-cart'));
    if (getSelectedPlayer && getSelectedPlayer.length > 0) {
      playersData.forEach((pd) => {
        if (getSelectedPlayer.includes(pd.id)) {
          newPlayersData.push({ ...pd, selected: true });
        } else {
          newPlayersData.push({ ...pd, selected: false });
        }
      });
      setPlayersData(newPlayersData);
    } else {
      setPlayersData(tempData);
    }
  }, [selectAction]);


  useEffect(() => {
    const newCartData = [];
    const getSelectedPlayer = JSON.parse(localStorage.getItem('players-cart'));
    if (getSelectedPlayer && getSelectedPlayer.length > 0) {
      for (const pId of getSelectedPlayer) {
        const foundPlayer = playersData.find((pd) => pd.id === pId);
        newCartData.push({ ...foundPlayer, selected: true });
      }
    }
    setCartData(newCartData);
  }, [selectAction]);


  const handleSelect = (playerId) => {
    if (cartData.length < 11) {
      addToDb(playerId);
      setSelectAction(!selectAction);
    } else {
      toast.error('You cannot add more than 11 players!');
    }
  };


  const handleClearAll = () => {
    if (cartData.length > 0) {
      toast('Clear Successfully!');
      deleteShoppingCart();
      setSelectAction(!selectAction);
    }
  };


  return (
    <div className="w-[90%] mx-auto mt-8">
      <div className="grid md:grid-cols-6 gap-8">
        <div className="md:col-span-4 mb-8">
          <h1 className="text-2xl font-bold text-center mb-8">Select Your Best Eleven</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {playersData.map((singleData, index) => (
              <SinglePlayer
                key={index}
                singleData={singleData}
                handleSelect={handleSelect}
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-2 border rounded-md">
          <SideCart cartData={cartData} handleClearAll={handleClearAll} />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default PlayersRoom;
