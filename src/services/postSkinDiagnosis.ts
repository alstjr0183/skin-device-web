import api from '@/lib/axios';

export const postSkinDiagnosis = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post('/skin/diagnosis', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
