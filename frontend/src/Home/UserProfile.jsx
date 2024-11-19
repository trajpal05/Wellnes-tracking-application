import ClassesGraph from "../components/ClassesGraph";
import DoughNut from "../components/DoughNut";
import LineBar from "../components/LineBar";

const UserProfile = () => {


    return (
        <>
            <div className="max-w-screen-xl mx-auto bg-white rounded-lg dark:bg-gray-800 p-4 md:p-6 text-left">

                <h5 class="text-2xl font-semibold text-gray-900 text-left">Congratulations!! You have a streak of 14 days.</h5>
            </div>
            <div className="bg-white p-4 md:p-6 flex flex-col text-left shadow">

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <DoughNut />
                    <ClassesGraph />
                </div>
            </div>
            <div className="p-6"/>
            <LineBar />
        </>

    );
};

export default UserProfile;
