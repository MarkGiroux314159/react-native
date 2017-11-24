import api from './api';

export default {
    findByName: (data) => {
        
        api.getFetch({nameCompleted: data})
    }

}