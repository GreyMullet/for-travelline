import { useEffect, useState } from 'react';
import './other_pages_styles/booking.css';
import axios from 'axios';
import { UseArrayRooms, useInputDates, useRoomStore, useUserName } from '../storage/storage';

export const Booking=()=>{
    const uid=useUserName(state=>state.id);

    const [roomSelect, setRoom] = useState('')
    const [dateFrom, setFrom] = useState('');
    const [dateTo, setTo] = useState('');

    const { rooms, fetchRooms } = useRoomStore(state => ({ rooms: state.rooms, fetchRooms: state.fetchRooms }));

    useEffect(()=>{
        fetchRooms();
    }, []);

    const [blockedDates, setBlockedDates] = useState([]);

    useEffect(() => {
        axios.get('http://server-hotel/booking.php')
            .then(response => {
                setBlockedDates(response.data);
            })
            .catch(error => {
                console.error('Error fetching blocked dates:', error);
            });

            console.log(blockedDates);
    }, []); 

    const isDateBlocked = (selectedDate) => {
        const blockedDateRanges = blockedDates.map(dateRange => {
            return {
                startDate: new Date(dateRange.Date_from),
                endDate: new Date(dateRange.Date_to)
            };
        });
    
        return blockedDateRanges.some(range => {
            return selectedDate >= range.startDate && selectedDate <= range.endDate;
        });
    };
    
    const handleDateChange = (selectedDate) => {
        const selectedDateObj = new Date(selectedDate);
        if (isDateBlocked(selectedDateObj)) {
            alert('This date is already booked.');
        }
    };
    
    useEffect(() => {
        console.log(blockedDates); 
    }, [blockedDates]);

    function handleSubmit(e){
        e.preventDefault();

        const selectedRoomId = parseInt(roomSelect.value);
        if (!isNaN(selectedRoomId) && selectedRoomId !== ''){
            axios.post('http://server-hotel/booking.php',{
                room: selectedRoomId,
                uid: uid,
                from: dateFrom.value,
                to: dateTo.value
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        }
    }

    const today = new Date();
    const formattedToday = today.toISOString().substr(0, 10);

    const arrayRooms=UseArrayRooms(state=>state.array);
    const arrayInputs=useInputDates(state=>state.array);

    return(
        <div className="booking">
            <main>
                <h1>Бронирование номера</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="room-select">Выберите номер</label>
                    <select name="rooms" id="room-select" onChange={e=>setRoom(e.target.value)}>
                        <option value="">Номера</option>
                        {Array.isArray(rooms) && rooms.map(room => (
                            <option key={String(room.room_id)} value={room.room_id}>{room.Room_Name}</option>
                        ))}
                    </select>
                    {
                        arrayRooms.map((el,i,arr)=>{
                            if (roomSelect.value === el) {
                                return arrayInputs[i]
                            }
                            return null;
                        })
                    }
                    <button type="submit">Забронировать</button>
                </form>
            </main>
        </div>
    );
}