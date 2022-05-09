import { useState } from "react";
import { ArrowLeft } from "phosphor-react-native";
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";
import { captureScreen } from "react-native-view-shot";
import { readAsStringAsync } from "expo-file-system";

import { api } from "../../libs/api";

import { theme } from "../../theme";
import { styles } from "./styles";

import { feedbackTypes } from "../../utils/feedbackTypes";

import { FeedbackType } from "../Widget";
import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";

interface Props {
    feedbackType: FeedbackType;
    onFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}

export function Form({
    feedbackType,
    onFeedbackCanceled,
    onFeedbackSent
}: Props) {

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const [comment, setComment] = useState<string>("");
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    function handleScreenshot() {
        captureScreen({
            format: "jpg",
            quality: 0.8
        })
            .then((uri) => setScreenshot(uri))
            .catch(error => console.log(error));
    }

    function handleRemoveScreenshot() {
        setScreenshot(null);
    }

    async function handleSendFeedback() {

        if (isSendingFeedback) {
            return;
        }

        setIsSendingFeedback(true);

        const screenshotBase64 = screenshot && await readAsStringAsync(
            screenshot,
            { encoding: "base64" }
        );

        try {
            await api.post("/feedbacks", {
                type: feedbackType,
                screenshot: `data:image/png;base64, ${screenshotBase64}`,
                comment
            });

            onFeedbackSent();

        } catch (error) {
            console.log(error);
            setIsSendingFeedback(false);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={onFeedbackCanceled}
                >
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image
                        style={styles.image}
                        source={feedbackTypeInfo.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>

            </View>
            <TextInput
                multiline
                style={styles.input}
                placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setComment}
            />
            <View style={styles.footer}>
                <ScreenshotButton
                    onScreenshot={handleScreenshot}
                    onRemoveScreenshot={handleRemoveScreenshot}
                    screenshot={screenshot}
                />
                <Button
                    isLoading={isSendingFeedback}
                    onPress={handleSendFeedback}
                />
            </View>
        </View>
    )
}