import { createSignalRContext } from 'react-signalr';
import { SignalrPage } from '../pages/SignalrPage'
import { Navigate, Route, Routes } from 'react-router-dom';

const SignalRContext = createSignalRContext();

export const SignalrRouttes = () => {

    return (
        <Routes>
            <Route path="/" element={<SignalrPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
