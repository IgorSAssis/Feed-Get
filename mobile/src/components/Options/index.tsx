import { View, Text } from "react-native";

import { styles } from "./styles";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";

import { Copyright } from "../Copyright";
import { Option } from "../Option";

interface Props {
    onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export function Options({
    onFeedbackTypeChange
}: Props) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Deixe o seu feedback
            </Text>

            <View style={styles.options}>
                {
                    Object
                        .entries(feedbackTypes)
                        .map(([key, value]) => {
                            return (
                                <Option 
                                    key={key} 
                                    title={value.title} 
                                    image={value.image} 
                                    onPress={() => onFeedbackTypeChange(key as FeedbackType)}
                                />
                            );
                        })
                }
            </View>

            <Copyright />

        </View>
    )
}