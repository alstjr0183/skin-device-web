import api from '@/lib/axios';

export type PostSkinDiagnosisIngredient = {
    name_ko: string;
    name_en: string;
    efficacy: string;
    caution: string;
    match_reason: string;
    usage_time: 'ANY' | 'DAY' | 'NIGHT';
}

export type PostSkinDiagnosisResponse = {
    is_skin: boolean;
    diagnosis: string;
    recommendation: string;
    scores: {
        wrinkles: number;
        pores: number;
        pigmentation: number;
        acne: number;
        redness: number;
        elasticity: number;
    };
    priorities: string[];
    recommended_ingredients: PostSkinDiagnosisIngredient[];
    graph_image: string;
}

export const postSkinDiagnosis = async (file: File): Promise<PostSkinDiagnosisResponse> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post('/skin/diagnosis', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
