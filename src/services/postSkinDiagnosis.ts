import api from '@/lib/axios';

export interface SkinDiagnosisResponse {
    diagnosis: string;
    recommendation: string;
    graph_image: string;
}

export const postSkinDiagnosis = async (file: File): Promise<SkinDiagnosisResponse> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post('/skin/diagnosis', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
