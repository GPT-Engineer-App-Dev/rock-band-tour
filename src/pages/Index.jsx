import { Box, Image, Heading, Text, Flex, VStack } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box textAlign="center" p={5}>
      <Heading mb={4} color="brand.800">Welcome to GPT Engineer</Heading>
      <Text fontSize="xl" mb={6}>Explore the future of web development with AI-driven solutions.</Text>
      <Image src="/images/live-band.jpg" alt="Live Band Performance" boxSize="100%" borderRadius="lg" />
      <VStack spacing={4} mt={6}>
        <Text fontSize="lg">Join us in revolutionizing how applications are built and maintained.</Text>
        <Text fontSize="lg">Experience cutting-edge technology firsthand.</Text>
      </VStack>
    </Box>
  );
};

export default Index;